import { Navigate } from "react-router-dom";

import LoadingScreen from "@/components/common/LoadingScreen";
import useAuth from "@/hooks/queries/useAuth";

export default function ProtectedRoute({ children }) {

    const {

        loading,

        isAuthenticated,

    } = useAuth();

    if (loading) {

        return <LoadingScreen />;

    }

    if (!isAuthenticated) {

        return <Navigate to="/login" replace />;

    }

    return children;

}