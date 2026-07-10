import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import LoginPage from "@/pages/auth/LoginPage";
import DashboardPage from "@/pages/dashboard/DashboardPage";

import AuthLayout from "@/layouts/AuthLayout";
import DashboardLayout from "@/layouts/DashboardLayout";

import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function AppRouter() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path={ROUTES.home}
                    element={<Navigate to="/dashboard" replace />}
                />

                <Route
                    path={ROUTES.login}
                    element={
                        <AuthLayout>

                            <LoginPage />

                        </AuthLayout>
                    }
                />

                <Route
                    path= {ROUTES.dashboard}
                    element={
                        <ProtectedRoute>

                            <DashboardLayout>

                                <DashboardPage />

                            </DashboardLayout>

                        </ProtectedRoute>
                    }
                />

            </Routes>

        </BrowserRouter>

    );

}