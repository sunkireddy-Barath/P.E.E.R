import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Home, BookOpen, User, MessageSquare } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';
export function BottomNav() {
    const location = useLocation();
    const navigate = useNavigate();
    const navItems = [
        { id: 'dashboard', label: 'Home', icon: _jsx(Home, { size: 24 }), path: '/dashboard' },
        { id: 'learn', label: 'Learn', icon: _jsx(BookOpen, { size: 24 }), path: '/learn' },
        { id: 'chat', label: 'Chat', icon: _jsx(MessageSquare, { size: 24 }), path: '/chat' },
        { id: 'profile', label: 'Profile', icon: _jsx(User, { size: 24 }), path: '/profile' },
    ];
    return (_jsx("div", { className: "fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-lg border-t border-neutral-200 dark:border-neutral-800 pb-safe z-50 md:hidden", children: _jsx("div", { className: "flex justify-around items-center h-16 px-2", children: navItems.map((item) => {
                const isActive = location.pathname.startsWith(item.path);
                return (_jsxs("button", { onClick: () => navigate(item.path), className: cn("flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors duration-200", isActive
                        ? "text-primary"
                        : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"), children: [_jsx("div", { className: cn("transition-transform duration-200", isActive && "scale-110"), children: item.icon }), _jsx("span", { className: "text-[10px] font-medium", children: item.label })] }, item.id));
            }) }) }));
}
