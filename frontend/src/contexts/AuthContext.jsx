import { createContext, useEffect, useState, useCallback } from "react";

import { authenticateUser, createUser } from "@/services/authService";
import { setLogoutHandler } from "@/services/authSession";
import {
    clearTokens,
    getAccessToken,
    setTokens,
} from "@/utils/tokenManager";
import { getCurrentUser } from "@/api/authApi";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    async function loginUser(credentials) {

        const tokens = await authenticateUser(credentials);

        setTokens(tokens.access, tokens.refresh);

        const user = await getCurrentUser();

        setUser(user);

    }

    async function registerUser(data) {
    
        return await createUser(data);

}

    const logoutUser = useCallback(() => {

        setUser(null);

        clearTokens();

    }, []);

    const checkAuth = useCallback(async () => {

    const accessToken = getAccessToken();

    if (!accessToken) {
        setLoading(false);
        return;
    }

    try {
        const user = await getCurrentUser(accessToken);
        setUser(user);
    }

    catch {
        logoutUser();
    }

    finally {
        setLoading(false);
    }

}, [logoutUser]);

    useEffect(() => {

    setLogoutHandler(logoutUser);

    void checkAuth();

}, [checkAuth, logoutUser]);

    const value = {

        user,

        loading,

        loginUser,

        registerUser,

        logoutUser,

        isAuthenticated: !!user,

    };

    return (

        <AuthContext.Provider value={value}>

            {children}

        </AuthContext.Provider>

    );

}

export default AuthContext;