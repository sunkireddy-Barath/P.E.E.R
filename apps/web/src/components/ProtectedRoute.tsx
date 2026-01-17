import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Loader2, Zap } from 'lucide-react';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
    const { user, loading, isAuthenticated } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-background">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                    <Zap size={40} className="text-primary animate-pulse" fill="currentColor" />
                </div>
                <Loader2 size={24} className="animate-spin text-primary mb-2" />
                <p className="text-muted-foreground">Loading...</p>
            </div>
        );
    }

    if (!isAuthenticated) {
        // Redirect to login page but save the attempted location
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <>{children}</>;
}

export function PublicRoute({ children }: ProtectedRouteProps) {
    const { isAuthenticated, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-background">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                    <Zap size={40} className="text-primary animate-pulse" fill="currentColor" />
                </div>
                <Loader2 size={24} className="animate-spin text-primary mb-2" />
                <p className="text-muted-foreground">Loading...</p>
            </div>
        );
    }

    // If authenticated, redirect to the page they came from or dashboard
    if (isAuthenticated) {
        const from = (location.state as any)?.from?.pathname || '/dashboard';
        return <Navigate to={from} replace />;
    }

    return <>{children}</>;
}
