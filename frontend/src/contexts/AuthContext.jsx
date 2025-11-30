import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null); // { id: "", name: "", role: "victim" | "officer" }
    const [isLoading, setIsLoading] = useState(true); // Add loading state

    // Restore session from localStorage on mount
    useEffect(() => {
        const token = localStorage.getItem("authToken");
        const storedUserId = localStorage.getItem("userId");
        const storedUserName = localStorage.getItem("userName");
        const storedUserRole = localStorage.getItem("userRole");

        if (token && storedUserName && storedUserRole) {
            setIsAuthenticated(true);
            setUser({
                id: storedUserId || `user_${Date.now()}`,
                name: storedUserName,
                role: storedUserRole
            });
            console.log("✅ Session restored:", { name: storedUserName, role: storedUserRole });
        }

        // Mark loading as complete
        setIsLoading(false);
    }, []);

    const login = (userName, role = "victim") => {
        // Mock login - in production, this would make an API call
        const mockToken = `token_${Date.now()}`;
        const mockUserId = `user_${Date.now()}`;

        console.log("🔐 Frontend-only login (demo):", { userName, role, userId: mockUserId });

        // Store in localStorage
        localStorage.setItem("authToken", mockToken);
        localStorage.setItem("userId", mockUserId);
        localStorage.setItem("userName", userName);
        localStorage.setItem("userRole", role);

        // Update state
        setIsAuthenticated(true);
        setUser({ id: mockUserId, name: userName, role });
    };

    const logout = () => {
        console.log("🚪 Frontend-only logout (demo)");

        // Clear localStorage
        localStorage.removeItem("authToken");
        localStorage.removeItem("userId");
        localStorage.removeItem("userName");
        localStorage.removeItem("userRole");

        // Update state
        setIsAuthenticated(false);
        setUser(null);
    };

    const value = {
        isAuthenticated,
        user,
        login,
        logout,
        isLoading, // Expose loading state
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use auth context
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export default AuthContext;
