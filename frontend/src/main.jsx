import React from "react";
import ReactDOM from "react-dom/client";

import QueryProvider from "./providers/QueryProviders";
import setupInterceptors from "@/api/setupInterceptors";

import App from "./App";
import { AuthProvider } from "./contexts/AuthContext";

import "./styles/globals.css";

setupInterceptors();

ReactDOM.createRoot(
    document.getElementById("root")
).render(

    <React.StrictMode>

        <QueryProvider>

            <AuthProvider>

                <App />

            </AuthProvider>

        </QueryProvider>

    </React.StrictMode>
    

);