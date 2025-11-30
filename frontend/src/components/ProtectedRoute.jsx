import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

/**
 * ProtectedRoute component that wraps routes requiring authentication and specific roles
 * @param {ReactNode} children - The component to render if authorized
 * @param {string} requiredRole - The required role ("victim" or "officer")
 */
export const ProtectedRoute = ({ children, requiredRole }) => {
    const { isAuthenticated, user, isLoading } = useAuth();
    const location = useLocation();

    console.log(`🛡️ ProtectedRoute check - Required: ${requiredRole}, Authenticated: ${isAuthenticated}, Current role: ${user?.role}, Loading: ${isLoading}`);

    // Wait for session restoration to complete
    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                    <p className="text-muted-foreground">Loading...</p>
                </div>
            </div>
        );
    }

    // Not authenticated - redirect to login with state
    if (!isAuthenticated) {
        console.log(`🔒 Not authenticated. Redirecting to /login/${requiredRole}`);
        return <Navigate to={`/login/${requiredRole}`} state={{ from: location.pathname }} replace />;
    }

    // Authenticated but wrong role - redirect to correct login
    if (user.role !== requiredRole) {
        console.log(`⚠️ Role mismatch. Redirecting to /login/${requiredRole}`);
        return <Navigate to={`/login/${requiredRole}`} state={{ from: location.pathname }} replace />;
    }

    // Correct authentication and role - render children
    console.log(`✅ Access granted to ${requiredRole} portal`);
    return children;
};

export default ProtectedRoute;
