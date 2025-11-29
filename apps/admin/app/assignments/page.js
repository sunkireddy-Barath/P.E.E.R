import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("div", { className: "p-8", children: [_jsxs("div", { className: "mb-8 flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "Assignments" }), _jsx("p", { className: "text-gray-600", children: "Create and manage student assignments" })] }), _jsxs(Link, { href: "/assignments/new", className: "flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors", children: [_jsx(Plus, { className: "h-5 w-5" }), "Create Assignment"] })] }), _jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: assignments.length === 0 ? (_jsx("div", { className: "col-span-full bg-white rounded-lg shadow p-12 text-center", children: _jsx("p", { className: "text-gray-500", children: "No assignments yet. Create your first assignment!" }) })) : (assignments.map((assignment) => {
                    const isPastDue = new Date(assignment.dueDate) < new Date();
                    return (_jsxs(Link, { href: `/assignments/${assignment.id}`, className: "bg-white rounded-lg shadow hover:shadow-md transition-shadow p-6", children: [_jsxs("div", { className: "mb-4", children: [_jsxs("div", { className: "flex items-start justify-between mb-2", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900 line-clamp-2", children: assignment.title }), _jsx("span", { className: `px-2 py-1 text-xs font-medium rounded-full ${isPastDue
                                                    ? 'bg-red-100 text-red-800'
                                                    : 'bg-green-100 text-green-800'}`, children: isPastDue ? 'Past Due' : 'Active' })] }), _jsx("p", { className: "text-sm text-gray-600 line-clamp-2", children: assignment.description })] }), _jsxs("div", { className: "space-y-2 text-sm text-gray-500", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "font-medium", children: "Subject:" }), _jsx("span", { className: "px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs", children: assignment.subject })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "font-medium", children: "Class:" }), _jsxs("span", { children: [assignment.class, " ", assignment.section && `- ${assignment.section}`] })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Calendar, { className: "h-4 w-4" }), _jsxs("span", { children: ["Due: ", new Date(assignment.dueDate).toLocaleDateString()] })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Users, { className: "h-4 w-4" }), _jsxs("span", { children: [assignment._count.submissions, " submissions"] })] })] })] }, assignment.id));
                })) })] }));
}
