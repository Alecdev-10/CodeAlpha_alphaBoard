import { Bell } from "lucide-react";

import SearchBar from "./SearchBar";

import "./Header.css";

export default function Header() {

    return (

        <header className="header">

            <div>

                <h1>

                    Dashboard

                </h1>

                <p>

                    Welcome back. Here's an overview of your workspace.

                </p>

            </div>

            <div className="header-actions">

                <SearchBar />

                <button className="notification-button">

                    <Bell size={20} />

                    <span className="notification-dot"></span>

                </button>

                <div className="user-avatar">

                    AB

                </div>

            </div>

        </header>

    );

}