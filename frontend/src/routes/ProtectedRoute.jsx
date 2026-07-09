import { Navigate } from "react-router-dom";

import useAuth from "@/hooks/useAuth";

import { ROUTES } from "@/constants/routes";

export default function ProtectedRoute({ children }) {

    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {

        return <Navigate to={ROUTES.login} replace />;

    }

    return children;

}