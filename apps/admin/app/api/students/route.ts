import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';
import { studentSchema } from '../../../lib/validations';

// GET /api/students - List all students
export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get('page') || '1');
        const pageSize = parseInt(searchParams.get('pageSize') || '10');
        const search = searchParams.get('search') || '';

        const where = search
            ? {
                OR: [
                    { name: { contains: search, mode: 'insensitive' as const } },
                    { rollNumber: { contains: search, mode: 'insensitive' as const } },
                    { email: { contains: search, mode: 'insensitive' as const } },
                ],
            }
            : {};

        const [students, total] = await Promise.all([
            prisma.student.findMany({
                where,
                skip: (page - 1) * pageSize,
                take: pageSize,
                orderBy: { name: 'asc' },
            }),
            prisma.student.count({ where }),
        ]);

        return NextResponse.json({
            data: students,
            total,
            page,
            pageSize,
        });
    } catch (error) {
        console.error('Error fetching students:', error);
        return NextResponse.json(
            { error: 'Failed to fetch students' },
            { status: 500 }
        );
    }
}

// POST /api/students - Create a new student
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const validatedData = studentSchema.parse(body);

        const student = await prisma.student.create({
            data: {
                ...validatedData,
                dateOfBirth: validatedData.dateOfBirth
                    ? new Date(validatedData.dateOfBirth)
                    : null,
            },
        });

        return NextResponse.json({ data: student }, { status: 201 });
    } catch (error: any) {
        console.error('Error creating student:', error);

        if (error.name === 'ZodError') {
            return NextResponse.json(
                { error: 'Validation failed', details: error.errors },
                { status: 400 }
            );
        }

        if (error.code === 'P2002') {
            return NextResponse.json(
                { error: 'Student with this roll number or email already exists' },
                { status: 409 }
            );
        }

        return NextResponse.json(
            { error: 'Failed to create student' },
            { status: 500 }
        );
    }
}
