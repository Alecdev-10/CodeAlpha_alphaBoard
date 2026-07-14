import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import DashboardPage from "@/pages/dashboard/DashboardPage";
import BoardPage from "@/pages/board/BoardPage";
import ProjectsPage from "../pages/projects/ProjectsPage";
import SettingsPage from "../pages/settings/SettingsPage";


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

                <Route

                    path={ROUTES.board}

                    element={

                        <ProtectedRoute>

                            <DashboardLayout>

                                <BoardPage />

                            </DashboardLayout>

                        </ProtectedRoute>

                    }

                />

                <Route
                    path={ROUTES.register}
                    element={
                        <AuthLayout>
                            <RegisterPage />
                        </AuthLayout>
                    }
                />

                <Route

                    path={ROUTES.projects}

                    element={

                        <ProtectedRoute>

                            <DashboardLayout>

                                <ProjectsPage />

                            </DashboardLayout>

                        </ProtectedRoute>

                    }

                />

                <Route

                    path={ROUTES.settings}

                    element={

                        <ProtectedRoute>

                            <DashboardLayout>

                                <SettingsPage />

                            </DashboardLayout>

                        </ProtectedRoute>

                    }

                />

            </Routes>

        </BrowserRouter>

    );

}