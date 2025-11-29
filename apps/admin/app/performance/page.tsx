import { prisma } from '../../lib/prisma';

export const dynamic = 'force-dynamic';

async function getPerformanceData() {
    const performances = await prisma.performance.findMany({
        include: {
            student: true,
        },
        orderBy: {
            testDate: 'desc',
        },
        take: 50,
    });

    return performances;
}

async function getSubjectStats() {
    const performances = await prisma.performance.groupBy({
        by: ['subject'],
        _avg: {
            score: true,
        },
        _count: {
            id: true,
        },
    });

    return performances;
}

export default async function PerformancePage() {
    const performances = await getPerformanceData();
    const subjectStats = await getSubjectStats();

    return (
        <div className="p-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Performance Analytics</h1>
                <p className="text-gray-600">Track and analyze student performance</p>
            </div>

            {/* Subject Stats */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
                {subjectStats.map((stat: any) => (
                    <div key={stat.subject} className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-sm font-medium text-gray-600 mb-2">{stat.subject}</h3>
                        <p className="text-3xl font-bold text-gray-900">
                            {stat._avg.score?.toFixed(1) || 0}%
                        </p>
                        <p className="text-sm text-gray-500 mt-1">{stat._count.id} assessments</p>
                    </div>
                ))}
            </div>

            {/* Recent Performance */}
            <div className="bg-white rounded-lg shadow">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">Recent Performance</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Student
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Subject
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Test Type
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Score
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Date
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {performances.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                                        No performance data available yet.
                                    </td>
                                </tr>
                            ) : (
                                performances.map((perf: any) => (
                                    <tr key={perf.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">{perf.student.name}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{perf.subject}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                                                {perf.testType}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {perf.score}/{perf.maxScore} ({((perf.score / perf.maxScore) * 100).toFixed(1)}%)
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-500">
                                                {new Date(perf.testDate).toLocaleDateString()}
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
