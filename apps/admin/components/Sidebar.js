'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '../lib/utils';
import { LayoutDashboard, Users, BarChart3, FileText, LogOut } from 'lucide-react';
const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Students', href: '/students', icon: Users },
    { name: 'Performance', href: '/performance', icon: BarChart3 },
    { name: 'Assignments', href: '/assignments', icon: FileText },
];
export function Sidebar() {
    const pathname = usePathname();
    return (_jsxs("div", { className: "flex h-screen w-64 flex-col bg-gray-900 text-white", children: [_jsx("div", { className: "flex h-16 items-center justify-center border-b border-gray-800", children: _jsx("h1", { className: "text-xl font-bold", children: "P.E.E.R Admin" }) }), _jsx("nav", { className: "flex-1 space-y-1 px-3 py-4", children: navigation.map((item) => {
                    const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');
                    return (_jsxs(Link, { href: item.href, className: cn('flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors', isActive
                            ? 'bg-gray-800 text-white'
                            : 'text-gray-400 hover:bg-gray-800 hover:text-white'), children: [_jsx(item.icon, { className: "h-5 w-5" }), item.name] }, item.name));
                }) }), _jsx("div", { className: "border-t border-gray-800 p-4", children: _jsxs("button", { className: "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-400 transition-colors hover:bg-gray-800 hover:text-white", children: [_jsx(LogOut, { className: "h-5 w-5" }), "Sign Out"] }) })] }));
}
