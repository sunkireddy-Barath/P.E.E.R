import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("div", { className: "p-8", children: [_jsxs("div", { className: "mb-8", children: [_jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "Performance Analytics" }), _jsx("p", { className: "text-gray-600", children: "Track and analyze student performance" })] }), _jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8", children: subjectStats.map((stat) => (_jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [_jsx("h3", { className: "text-sm font-medium text-gray-600 mb-2", children: stat.subject }), _jsxs("p", { className: "text-3xl font-bold text-gray-900", children: [stat._avg.score?.toFixed(1) || 0, "%"] }), _jsxs("p", { className: "text-sm text-gray-500 mt-1", children: [stat._count.id, " assessments"] })] }, stat.subject))) }), _jsxs("div", { className: "bg-white rounded-lg shadow", children: [_jsx("div", { className: "px-6 py-4 border-b border-gray-200", children: _jsx("h2", { className: "text-lg font-semibold text-gray-900", children: "Recent Performance" }) }), _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-200", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Student" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Subject" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Test Type" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Score" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Date" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: performances.length === 0 ? (_jsx("tr", { children: _jsx("td", { colSpan: 5, className: "px-6 py-12 text-center text-gray-500", children: "No performance data available yet." }) })) : (performances.map((perf) => (_jsxs("tr", { className: "hover:bg-gray-50", children: [_jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsx("div", { className: "text-sm font-medium text-gray-900", children: perf.student.name }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsx("div", { className: "text-sm text-gray-900", children: perf.subject }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsx("span", { className: "px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800", children: perf.testType }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsxs("div", { className: "text-sm text-gray-900", children: [perf.score, "/", perf.maxScore, " (", ((perf.score / perf.maxScore) * 100).toFixed(1), "%)"] }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsx("div", { className: "text-sm text-gray-500", children: new Date(perf.testDate).toLocaleDateString() }) })] }, perf.id)))) })] }) })] })] }));
}
