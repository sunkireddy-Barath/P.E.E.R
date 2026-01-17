import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { 
    LayoutDashboard, BookOpen, MessageCircle, User, Wifi, WifiOff, Zap, 
    Trophy, Medal, Gamepad2, ShoppingBag, Users, Calendar, 
    Video, ClipboardList, Glasses, Activity, Heart, Menu, X, LogOut, ChevronDown
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useAuth } from '../contexts/AuthContext';
import { logOut } from '../lib/firebase';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export default function Layout() {
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useAuth();
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);

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

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
        setUserMenuOpen(false);
    }, [location.pathname]);

    const handleLogout = async () => {
        await logOut();
        navigate('/login');
    };

    const navItems = [
        { path: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
        { path: '/learn', label: 'Learn', icon: <BookOpen size={20} /> },
        { path: '/games', label: 'Games', icon: <Gamepad2 size={20} /> },
        { path: '/vr-games', label: 'VR Games', icon: <Glasses size={20} /> },
        { path: '/workshops', label: 'Workshops', icon: <Video size={20} /> },
        { path: '/exams', label: 'Exams', icon: <ClipboardList size={20} /> },
        { path: '/activities', label: 'Activities', icon: <Activity size={20} /> },
        { path: '/emotions', label: 'Emotions', icon: <Heart size={20} /> },
        { path: '/achievements', label: 'Achievements', icon: <Trophy size={20} /> },
        { path: '/leaderboard', label: 'Leaderboard', icon: <Medal size={20} /> },
        { path: '/progress', label: 'Progress', icon: <Calendar size={20} /> },
        { path: '/social', label: 'Social', icon: <Users size={20} /> },
        { path: '/shop', label: 'Shop', icon: <ShoppingBag size={20} /> },
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
                        <h1 className="text-lg md:text-xl font-bold tracking-tight text-foreground m-0">P.E.E.R</h1>
                    </div>

                    <div className="flex items-center gap-2 md:gap-4">
                        {/* Online/Offline indicator */}
                        <div className={cn(
                            "flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-medium transition-colors duration-300",
                            isOnline
                                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                                : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                        )}>
                            <span className="flex items-center">
                                {isOnline ? <Wifi size={14} /> : <WifiOff size={14} />}
                            </span>
                            <span className="hidden sm:inline">{isOnline ? 'Online' : 'Offline'}</span>
                        </div>

                        {/* User Menu - Desktop */}
                        <div className="hidden md:block relative">
                            <button 
                                onClick={() => setUserMenuOpen(!userMenuOpen)}
                                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted transition-colors"
                            >
                                {user?.photoURL ? (
                                    <img src={user.photoURL} alt="Profile" className="w-8 h-8 rounded-full" />
                                ) : (
                                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                        <User size={16} className="text-primary" />
                                    </div>
                                )}
                                <span className="text-sm font-medium max-w-[100px] truncate">
                                    {user?.displayName || user?.email?.split('@')[0] || 'User'}
                                </span>
                                <ChevronDown size={16} className={cn("transition-transform", userMenuOpen && "rotate-180")} />
                            </button>

                            {userMenuOpen && (
                                <>
                                    <div className="fixed inset-0" onClick={() => setUserMenuOpen(false)} />
                                    <div className="absolute right-0 mt-2 w-56 bg-card border border-border rounded-xl shadow-lg overflow-hidden z-50">
                                        <div className="p-3 border-b border-border">
                                            <p className="font-medium text-sm truncate">{user?.displayName || 'User'}</p>
                                            <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
                                        </div>
                                        <div className="p-2">
                                            <Link
                                                to="/profile"
                                                className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-muted transition-colors"
                                            >
                                                <User size={16} />
                                                View Profile
                                            </Link>
                                            <button
                                                onClick={handleLogout}
                                                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                                            >
                                                <LogOut size={16} />
                                                Sign Out
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Mobile menu button */}
                        <button 
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-muted"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Navigation Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    <div className="fixed inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
                    <div className="fixed top-[60px] left-0 right-0 bottom-0 bg-surface overflow-y-auto animate-in slide-in-from-top duration-200">
                        {/* User Info - Mobile */}
                        <div className="p-4 border-b border-border flex items-center gap-3">
                            {user?.photoURL ? (
                                <img src={user.photoURL} alt="Profile" className="w-12 h-12 rounded-full" />
                            ) : (
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                                    <User size={24} className="text-primary" />
                                </div>
                            )}
                            <div className="flex-1 min-w-0">
                                <p className="font-medium truncate">{user?.displayName || 'User'}</p>
                                <p className="text-sm text-muted-foreground truncate">{user?.email}</p>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg"
                            >
                                <LogOut size={20} />
                            </button>
                        </div>

                        <div className="p-4 grid grid-cols-3 gap-3">
                            {navItems.map((item) => {
                                const isActive = location.pathname.startsWith(item.path);
                                return (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        className={cn(
                                            "flex flex-col items-center gap-2 p-4 rounded-xl text-center transition-all duration-200",
                                            isActive
                                                ? "bg-primary text-white shadow-lg"
                                                : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
                                        )}
                                    >
                                        <span className="flex items-center">{item.icon}</span>
                                        <span className="text-xs font-medium">{item.label}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}

            {/* Desktop Navigation */}
            <nav className="hidden md:block bg-surface border-b border-border/50 shadow-sm">
                <div className="container mx-auto px-4 py-2">
                    <div className="flex gap-2 overflow-x-auto no-scrollbar">
                        {navItems.map((item) => {
                            const isActive = location.pathname.startsWith(item.path);
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={cn(
                                        "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap",
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

            {/* Mobile Bottom Navigation - Quick Access */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface border-t border-border z-40 safe-area-bottom">
                <div className="flex justify-around items-center py-2">
                    {navItems.slice(0, 5).map((item) => {
                        const isActive = location.pathname.startsWith(item.path);
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={cn(
                                    "flex flex-col items-center gap-1 p-2 rounded-lg transition-colors",
                                    isActive ? "text-primary" : "text-muted-foreground"
                                )}
                            >
                                <span>{item.icon}</span>
                                <span className="text-[10px] font-medium">{item.label}</span>
                            </Link>
                        );
                    })}
                </div>
            </nav>

            {/* Main content */}
            <main className="flex-1 py-4 md:py-8 pb-20 md:pb-8 animate-in fade-in duration-500">
                <div className="container mx-auto px-3 md:px-4">
                    <Outlet />
                </div>
            </main>

            {/* Footer - Hidden on mobile */}
            <footer className="hidden md:block bg-surface border-t border-border py-8 mt-auto">
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
