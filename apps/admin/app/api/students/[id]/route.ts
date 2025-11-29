import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';
import { studentSchema } from '../../../../lib/validations';

// GET /api/students/[id] - Get a single student
export async function GET(
    _request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const student = await prisma.student.findUnique({
            where: { id: params.id },
            include: {
                performances: {
                    orderBy: { testDate: 'desc' },
                    take: 10,
                },
                submissions: {
                    include: {
                        assignment: true,
                    },
                    orderBy: { submittedAt: 'desc' },
                    take: 10,
                },
            },
        });

        if (!student) {
            return NextResponse.json(
                { error: 'Student not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ data: student });
    } catch (error) {
        console.error('Error fetching student:', error);
        return NextResponse.json(
            { error: 'Failed to fetch student' },
            { status: 500 }
        );
    }
}

// PUT /api/students/[id] - Update a student
export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const body = await request.json();
        const validatedData = studentSchema.parse(body);

        const student = await prisma.student.update({
            where: { id: params.id },
            data: {
                ...validatedData,
                dateOfBirth: validatedData.dateOfBirth
                    ? new Date(validatedData.dateOfBirth)
                    : null,
            },
        });

        return NextResponse.json({ data: student });
    } catch (error: any) {
        console.error('Error updating student:', error);

        if (error.name === 'ZodError') {
            return NextResponse.json(
                { error: 'Validation failed', details: error.errors },
                { status: 400 }
            );
        }

        if (error.code === 'P2025') {
            return NextResponse.json(
                { error: 'Student not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { error: 'Failed to update student' },
            { status: 500 }
        );
    }
}

// DELETE /api/students/[id] - Delete a student
export async function DELETE(
    _request: Request,
    { params }: { params: { id: string } }
) {
    try {
        await prisma.student.delete({
            where: { id: params.id },
        });

        return NextResponse.json({ message: 'Student deleted successfully' });
    } catch (error: any) {
        console.error('Error deleting student:', error);

        if (error.code === 'P2025') {
            return NextResponse.json(
                { error: 'Student not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { error: 'Failed to delete student' },
            { status: 500 }
        );
    }
}
