import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { LayoutDashboard, BookOpen, MessageCircle, User, Wifi, WifiOff, Zap } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
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
        { path: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
        { path: '/learn', label: 'Learn', icon: <BookOpen size={20} /> },
        { path: '/chat', label: 'Chat', icon: <MessageCircle size={20} /> },
        { path: '/profile', label: 'Profile', icon: <User size={20} /> },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
            {/* Header */}
            <header className="bg-surface/80 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-sm transition-all duration-200">
                <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="text-primary flex items-center p-2 bg-primary/10 rounded-full">
                            <Zap size={24} fill="currentColor" />
                        </span>
                        <h1 className="text-xl font-bold tracking-tight text-foreground m-0">P.E.E.R</h1>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Online/Offline indicator */}
                        <div className={cn(
                            "flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-300",
                            isOnline
                                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                                : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                        )}>
                            <span className="flex items-center">
                                {isOnline ? <Wifi size={14} /> : <WifiOff size={14} />}
                            </span>
                            <span>{isOnline ? 'Online' : 'Offline'}</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Navigation */}
            <nav className="bg-surface border-b border-border/50 shadow-sm">
                <div className="container mx-auto px-4 py-2">
                    <div className="flex gap-2 overflow-x-auto no-scrollbar">
                        {navItems.map((item) => {
                            const isActive = location.pathname.startsWith(item.path);
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={cn(
                                        "flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap",
                                        isActive
                                            ? "bg-primary text-white shadow-md shadow-primary/25 translate-y-[-1px]"
                                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                    )}
                                >
                                    <span className="flex items-center">{item.icon}</span>
                                    <span>{item.label}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </nav>

            {/* Main content */}
            <main className="flex-1 py-8 animate-in fade-in duration-500">
                <div className="container mx-auto px-4">
                    <Outlet />
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-surface border-t border-border py-8 mt-auto">
                <div className="container mx-auto px-4 text-center text-muted-foreground">
                    <p className="font-medium">© 2024 P.E.E.R</p>
                    <p className="text-sm mt-2 opacity-80">
                        Empowering Rural Education • Offline-first AI Learning Platform
                    </p>
                </div>
            </footer>
        </div>
    );
}
