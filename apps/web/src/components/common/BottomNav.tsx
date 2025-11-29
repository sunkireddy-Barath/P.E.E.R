import { Home, BookOpen, User, MessageSquare } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';

interface NavItem {
    id: string;
    label: string;
    icon: React.ReactNode;
    path: string;
}

export function BottomNav() {
    const location = useLocation();
    const navigate = useNavigate();

    const navItems: NavItem[] = [
        { id: 'dashboard', label: 'Home', icon: <Home size={24} />, path: '/dashboard' },
        { id: 'learn', label: 'Learn', icon: <BookOpen size={24} />, path: '/learn' },
        { id: 'chat', label: 'Chat', icon: <MessageSquare size={24} />, path: '/chat' },
        { id: 'profile', label: 'Profile', icon: <User size={24} />, path: '/profile' },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-lg border-t border-neutral-200 dark:border-neutral-800 pb-safe z-50 md:hidden">
            <div className="flex justify-around items-center h-16 px-2">
                {navItems.map((item) => {
                    const isActive = location.pathname.startsWith(item.path);
                    return (
                        <button
                            key={item.id}
                            onClick={() => navigate(item.path)}
                            className={cn(
                                "flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors duration-200",
                                isActive
                                    ? "text-primary"
                                    : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
                            )}
                        >
                            <div className={cn(
                                "transition-transform duration-200",
                                isActive && "scale-110"
                            )}>
                                {item.icon}
                            </div>
                            <span className="text-[10px] font-medium">{item.label}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
