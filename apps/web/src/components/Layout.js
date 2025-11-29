import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { LayoutDashboard, BookOpen, MessageCircle, User, Wifi, WifiOff, Zap } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
function cn(...inputs) {
    return twMerge(clsx(inputs));
}
export default function Layout() {
    const location = useLocation();
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);
    const navItems = [
        { path: '/dashboard', label: 'Dashboard', icon: _jsx(LayoutDashboard, { size: 20 }) },
        { path: '/learn', label: 'Learn', icon: _jsx(BookOpen, { size: 20 }) },
        { path: '/chat', label: 'Chat', icon: _jsx(MessageCircle, { size: 20 }) },
        { path: '/profile', label: 'Profile', icon: _jsx(User, { size: 20 }) },
    ];
    return (_jsxs("div", { className: "min-h-screen flex flex-col bg-background font-sans text-foreground", children: [_jsx("header", { className: "bg-surface/80 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-sm transition-all duration-200", children: _jsxs("div", { className: "container mx-auto px-4 py-3 flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("span", { className: "text-primary flex items-center p-2 bg-primary/10 rounded-full", children: _jsx(Zap, { size: 24, fill: "currentColor" }) }), _jsx("h1", { className: "text-xl font-bold tracking-tight text-foreground m-0", children: "P.E.E.R" })] }), _jsx("div", { className: "flex items-center gap-4", children: _jsxs("div", { className: cn("flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-300", isOnline
                                    ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                                    : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"), children: [_jsx("span", { className: "flex items-center", children: isOnline ? _jsx(Wifi, { size: 14 }) : _jsx(WifiOff, { size: 14 }) }), _jsx("span", { children: isOnline ? 'Online' : 'Offline' })] }) })] }) }), _jsx("nav", { className: "bg-surface border-b border-border/50 shadow-sm", children: _jsx("div", { className: "container mx-auto px-4 py-2", children: _jsx("div", { className: "flex gap-2 overflow-x-auto no-scrollbar", children: navItems.map((item) => {
                            const isActive = location.pathname.startsWith(item.path);
                            return (_jsxs(Link, { to: item.path, className: cn("flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap", isActive
                                    ? "bg-primary text-white shadow-md shadow-primary/25 translate-y-[-1px]"
                                    : "text-muted-foreground hover:bg-muted hover:text-foreground"), children: [_jsx("span", { className: "flex items-center", children: item.icon }), _jsx("span", { children: item.label })] }, item.path));
                        }) }) }) }), _jsx("main", { className: "flex-1 py-8 animate-in fade-in duration-500", children: _jsx("div", { className: "container mx-auto px-4", children: _jsx(Outlet, {}) }) }), _jsx("footer", { className: "bg-surface border-t border-border py-8 mt-auto", children: _jsxs("div", { className: "container mx-auto px-4 text-center text-muted-foreground", children: [_jsx("p", { className: "font-medium", children: "\u00A9 2024 P.E.E.R" }), _jsx("p", { className: "text-sm mt-2 opacity-80", children: "Empowering Rural Education \u2022 Offline-first AI Learning Platform" })] }) })] }));
}
