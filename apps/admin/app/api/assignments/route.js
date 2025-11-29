import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';
import { assignmentSchema } from '../../../lib/validations';
// GET /api/assignments - List assignments
export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const classFilter = searchParams.get('class');
        const subject = searchParams.get('subject');
        const where = {};
        if (classFilter)
            where.class = classFilter;
        if (subject)
            where.subject = subject;
        const assignments = await prisma.assignment.findMany({
            where,
            include: {
                createdBy: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    },
                },
                _count: {
                    select: {
                        submissions: true,
                    },
                },
            },
            orderBy: { dueDate: 'desc' },
        });
        return NextResponse.json({ data: assignments });
    }
    catch (error) {
        console.error('Error fetching assignments:', error);
        return NextResponse.json({ error: 'Failed to fetch assignments' }, { status: 500 });
    }
}
// POST /api/assignments - Create assignment
export async function POST(request) {
    try {
        const body = await request.json();
        const validatedData = assignmentSchema.parse(body);
        // TODO: Get actual user ID from session
        const createdById = 'temp-user-id';
        const assignment = await prisma.assignment.create({
            data: {
                ...validatedData,
                dueDate: new Date(validatedData.dueDate),
                createdById,
            },
        });
        return NextResponse.json({ data: assignment }, { status: 201 });
    }
    catch (error) {
        console.error('Error creating assignment:', error);
        if (error.name === 'ZodError') {
            return NextResponse.json({ error: 'Validation failed', details: error.errors }, { status: 400 });
        }
        return NextResponse.json({ error: 'Failed to create assignment' }, { status: 500 });
    }
}
