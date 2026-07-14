import {

    LayoutDashboard,
    FolderKanban,
    Users,
    Settings,
    LogOut,

} from "lucide-react";

import Logo from "@/components/auth/Logo";
import SidebarItem from "./SidebarItem";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "@/hooks/queries/useAuth";

import { ROUTES } from "@/constants/routes";

import "./Sidebar.css";

export default function Sidebar() {

    const navigate = useNavigate();
    const { logoutUser } = useAuth();
    
    return (

        <aside className="sidebar">

            <div>

                <Logo />

                <nav className="sidebar-nav">

                    <NavLink to={ROUTES.dashboard}>

                        {({ isActive }) => (

                            <SidebarItem

                                icon={LayoutDashboard}

                                label="Dashboard"

                                active={isActive}

                            />

                        )}

                    </NavLink>

                    <NavLink to={ROUTES.board}>

                        {({ isActive }) => (

                            <SidebarItem

                                icon={FolderKanban}

                                label="Board"

                                active={isActive}

                            />

                        )}

                    </NavLink>

                    <NavLink to={ROUTES.projects}>


                        {({ isActive }) => (

                            <SidebarItem

                                icon={Users}

                                label="Projects"

                                active={isActive}

                            />

                        )}

                    </NavLink>

                    <NavLink to={ROUTES.settings}>

                        {({ isActive }) => (

                            <SidebarItem

                                icon={Settings}

                                label="Settings"

                                active={isActive}

                            />

                        )}

                    </NavLink>

                </nav>

            </div>

            <button className="sidebar-logout"
                onClick={async () => {
                    await logoutUser();
                    navigate("/login");
                }}
            >

                <LogOut size={18}/>

                <span>

                    Logout

                </span>

            </button>

        </aside>

    );

}