import { Outlet } from "react-router-dom";

import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

import "./AppLayout.css";

export default function AppLayout() {

    return (

        <div className="app-layout">

            <Sidebar />

            <main className="app-main">

                <Header />

                <section className="app-content">

                    <Outlet />

                </section>

            </main>

        </div>

    );

}