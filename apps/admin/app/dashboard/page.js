import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("div", { className: "p-8", children: [_jsxs("div", { className: "mb-8", children: [_jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "Dashboard" }), _jsx("p", { className: "text-gray-600", children: "Welcome to the P.E.E.R Admin Portal" })] }), _jsxs("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8", children: [_jsx("div", { className: "bg-white rounded-lg shadow p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-gray-600", children: "Total Students" }), _jsx("p", { className: "text-3xl font-bold text-gray-900", children: stats.studentCount })] }), _jsx("div", { className: "bg-blue-100 p-3 rounded-full", children: _jsx(Users, { className: "h-6 w-6 text-blue-600" }) })] }) }), _jsx("div", { className: "bg-white rounded-lg shadow p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-gray-600", children: "Active Assignments" }), _jsx("p", { className: "text-3xl font-bold text-gray-900", children: stats.assignmentCount })] }), _jsx("div", { className: "bg-green-100 p-3 rounded-full", children: _jsx(FileText, { className: "h-6 w-6 text-green-600" }) })] }) }), _jsx("div", { className: "bg-white rounded-lg shadow p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-gray-600", children: "Avg Performance" }), _jsxs("p", { className: "text-3xl font-bold text-gray-900", children: [stats.avgPerformance.toFixed(1), "%"] })] }), _jsx("div", { className: "bg-purple-100 p-3 rounded-full", children: _jsx(TrendingUp, { className: "h-6 w-6 text-purple-600" }) })] }) }), _jsx("div", { className: "bg-white rounded-lg shadow p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-gray-600", children: "Achievements" }), _jsx("p", { className: "text-3xl font-bold text-gray-900", children: "24" })] }), _jsx("div", { className: "bg-yellow-100 p-3 rounded-full", children: _jsx(Award, { className: "h-6 w-6 text-yellow-600" }) })] }) })] }), _jsxs("div", { className: "bg-white rounded-lg shadow", children: [_jsx("div", { className: "px-6 py-4 border-b border-gray-200", children: _jsx("h2", { className: "text-lg font-semibold text-gray-900", children: "Recent Students" }) }), _jsx("div", { className: "p-6", children: recentStudents.length === 0 ? (_jsx("p", { className: "text-gray-500 text-center py-8", children: "No students yet. Add your first student!" })) : (_jsx("div", { className: "space-y-4", children: recentStudents.map((student) => (_jsxs("div", { className: "flex items-center justify-between py-3 border-b border-gray-100 last:border-0", children: [_jsxs("div", { children: [_jsx("p", { className: "font-medium text-gray-900", children: student.name }), _jsxs("p", { className: "text-sm text-gray-500", children: ["Class ", student.class, " ", student.section && `- ${student.section}`, " \u2022 Roll: ", student.rollNumber] })] }), _jsx("div", { className: "text-sm text-gray-500", children: new Date(student.createdAt).toLocaleDateString() })] }, student.id))) })) })] })] }));
}
