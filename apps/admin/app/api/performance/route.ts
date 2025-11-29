import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';
import { performanceSchema } from '../../../lib/validations';

// GET /api/performance - List performance records
export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const studentId = searchParams.get('studentId');
        const subject = searchParams.get('subject');

        const where: any = {};
        if (studentId) where.studentId = studentId;
        if (subject) where.subject = subject;

        const performances = await prisma.performance.findMany({
            where,
            include: {
                student: true,
            },
            orderBy: { testDate: 'desc' },
            take: 100,
        });

        return NextResponse.json({ data: performances });
    } catch (error) {
        console.error('Error fetching performance:', error);
        return NextResponse.json(
            { error: 'Failed to fetch performance data' },
            { status: 500 }
        );
    }
}

// POST /api/performance - Create performance record
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const validatedData = performanceSchema.parse(body);

        const performance = await prisma.performance.create({
            data: {
                ...validatedData,
                testDate: new Date(validatedData.testDate),
            },
        });

        return NextResponse.json({ data: performance }, { status: 201 });
    } catch (error: any) {
        console.error('Error creating performance:', error);

        if (error.name === 'ZodError') {
            return NextResponse.json(
                { error: 'Validation failed', details: error.errors },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { error: 'Failed to create performance record' },
            { status: 500 }
        );
    }
}
