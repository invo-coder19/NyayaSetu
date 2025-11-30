/**
 * Navigate to a role-specific target with authentication checks
 * @param {function} navigate - React Router navigate function
 * @param {object} location - React Router location object
 * @param {string} targetPath - The intended destination path (e.g., "/victim-portal")
 * @param {string} requiredRole - Required role ("victim" or "officer")
 * @param {object} auth - Auth context with { isAuthenticated, user }
 * @param {function} toast - Toast function for notifications (optional)
 */
export const navigateToRoleTarget = (navigate, location, targetPath, requiredRole, auth, toast) => {
    // If not authenticated, redirect to login for the required role
    if (!auth.isAuthenticated) {
        console.log(`🔒 Not authenticated. Redirecting to /login/${requiredRole}`);
        navigate(`/login/${requiredRole}`, { state: { from: targetPath } });
        return;
    }

    // If authenticated but wrong role, redirect to login for required role
    if (auth.user.role !== requiredRole) {
        const roleLabel = requiredRole === 'officer' ? 'Officer' : 'Victim';
        console.log(`⚠️ Role mismatch. Current: ${auth.user.role}, Required: ${requiredRole}`);

        if (toast) {
            toast({
                title: `Please login as ${roleLabel}`,
                description: `You need ${roleLabel} access to view this portal.`,
            });
        }

        navigate(`/login/${requiredRole}`, { state: { from: targetPath } });
        return;
    }

    // If authenticated with correct role, navigate to target
    console.log(`✅ Authenticated as ${auth.user.role}. Navigating to ${targetPath}`);
    navigate(targetPath);
};
