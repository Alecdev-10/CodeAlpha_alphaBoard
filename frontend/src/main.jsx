import React from "react";
import ReactDOM from "react-dom/client";

import QueryProvider from "./providers/QueryProviders";
import setupInterceptors from "@/api/setupInterceptors";

import { AuthProvider } from "./contexts/AuthContext";

import "./styles/globals.css";
import AppRouter from "./router";

setupInterceptors();

ReactDOM.createRoot(
    document.getElementById("root")
).render(

    <React.StrictMode>

        <AuthProvider>

            <QueryProvider>

                <AppRouter />

            </QueryProvider>

        </AuthProvider>

    </React.StrictMode>
    

);