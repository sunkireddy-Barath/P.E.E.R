import { prisma } from '../../lib/prisma';
import Link from 'next/link';
import { Plus, Calendar, Users } from 'lucide-react';

export const dynamic = 'force-dynamic';

async function getAssignments() {
    return prisma.assignment.findMany({
        include: {
            createdBy: true,
            _count: {
                select: {
                    submissions: true,
                },
            },
        },
        orderBy: {
            dueDate: 'desc',
        },
    });
}

export default async function AssignmentsPage() {
    const assignments = await getAssignments();

    return (
        <div className="p-8">
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Assignments</h1>
                    <p className="text-gray-600">Create and manage student assignments</p>
                </div>
                <Link
                    href="/assignments/new"
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    <Plus className="h-5 w-5" />
                    Create Assignment
                </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {assignments.length === 0 ? (
                    <div className="col-span-full bg-white rounded-lg shadow p-12 text-center">
                        <p className="text-gray-500">No assignments yet. Create your first assignment!</p>
                    </div>
                ) : (
                    assignments.map((assignment: any) => {
                        const isPastDue = new Date(assignment.dueDate) < new Date();
                        return (
                            <Link
                                key={assignment.id}
                                href={`/assignments/${assignment.id}`}
                                className="bg-white rounded-lg shadow hover:shadow-md transition-shadow p-6"
                            >
                                <div className="mb-4">
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                                            {assignment.title}
                                        </h3>
                                        <span
                                            className={`px-2 py-1 text-xs font-medium rounded-full ${isPastDue
                                                ? 'bg-red-100 text-red-800'
                                                : 'bg-green-100 text-green-800'
                                                }`}
                                        >
                                            {isPastDue ? 'Past Due' : 'Active'}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 line-clamp-2">
                                        {assignment.description}
                                    </p>
                                </div>

                                <div className="space-y-2 text-sm text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <span className="font-medium">Subject:</span>
                                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                                            {assignment.subject}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-medium">Class:</span>
                                        <span>
                                            {assignment.class} {assignment.section && `- ${assignment.section}`}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4" />
                                        <span>Due: {new Date(assignment.dueDate).toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users className="h-4 w-4" />
                                        <span>{assignment._count.submissions} submissions</span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })
                )}
            </div>
        </div>
    );
}
