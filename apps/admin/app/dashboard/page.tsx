import { prisma } from '../../lib/prisma';
import { Users, FileText, TrendingUp, Award } from 'lucide-react';

export const dynamic = 'force-dynamic';

async function getStats() {
    const [studentCount, assignmentCount, avgPerformance] = await Promise.all([
        prisma.student.count(),
        prisma.assignment.count(),
        prisma.performance.aggregate({
            _avg: {
                score: true,
            },
        }),
    ]);

    return {
        studentCount,
        assignmentCount,
        avgPerformance: avgPerformance._avg.score || 0,
    };
}

async function getRecentStudents() {
    return prisma.student.findMany({
        take: 5,
        orderBy: {
            createdAt: 'desc',
        },
    });
}

export default async function DashboardPage() {
    const stats = await getStats();
    const recentStudents = await getRecentStudents();

    return (
        <div className="p-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600">Welcome to the P.E.E.R Admin Portal</p>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Total Students</p>
                            <p className="text-3xl font-bold text-gray-900">{stats.studentCount}</p>
                        </div>
                        <div className="bg-blue-100 p-3 rounded-full">
                            <Users className="h-6 w-6 text-blue-600" />
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Active Assignments</p>
                            <p className="text-3xl font-bold text-gray-900">{stats.assignmentCount}</p>
                        </div>
                        <div className="bg-green-100 p-3 rounded-full">
                            <FileText className="h-6 w-6 text-green-600" />
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Avg Performance</p>
                            <p className="text-3xl font-bold text-gray-900">{stats.avgPerformance.toFixed(1)}%</p>
                        </div>
                        <div className="bg-purple-100 p-3 rounded-full">
                            <TrendingUp className="h-6 w-6 text-purple-600" />
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Achievements</p>
                            <p className="text-3xl font-bold text-gray-900">24</p>
                        </div>
                        <div className="bg-yellow-100 p-3 rounded-full">
                            <Award className="h-6 w-6 text-yellow-600" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Students */}
            <div className="bg-white rounded-lg shadow">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">Recent Students</h2>
                </div>
                <div className="p-6">
                    {recentStudents.length === 0 ? (
                        <p className="text-gray-500 text-center py-8">No students yet. Add your first student!</p>
                    ) : (
                        <div className="space-y-4">
                            {recentStudents.map((student: any) => (
                                <div key={student.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                                    <div>
                                        <p className="font-medium text-gray-900">{student.name}</p>
                                        <p className="text-sm text-gray-500">
                                            Class {student.class} {student.section && `- ${student.section}`} • Roll: {student.rollNumber}
                                        </p>
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        {new Date(student.createdAt).toLocaleDateString()}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
