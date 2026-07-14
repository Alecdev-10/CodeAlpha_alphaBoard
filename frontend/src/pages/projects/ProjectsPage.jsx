import { Plus, Search } from "lucide-react";

import ProjectCard from "@/components/dashboard/ProjectCard";
import Button from "@/components/ui/Button/Button";

import "./ProjectsPage.css";

const projects = [

    {
        name: "AlphaBoard",
        description: "Project management platform.",
        progress: 72,
        members: 5,
    },

    {
        name: "Marketplace",
        description: "Django e-commerce application.",
        progress: 45,
        members: 3,
    },

    {
        name: "DigiMama",
        description: "Maternal health mobile platform.",
        progress: 18,
        members: 7,
    },

];

export default function ProjectsPage() {

    return (

        <main className="projects-page">

            <header className="projects-header">

                <div>

                    <h1>

                        Projects

                    </h1>

                    <p>

                        Manage all your workspaces.

                    </p>

                </div>

                <Button>

                    <Plus size={18}/>

                    New Project

                </Button>

            </header>

            <div className="projects-toolbar">

                <div className="projects-search">

                    <Search size={18}/>

                    <input

                        type="text"

                        placeholder="Search projects..."

                    />

                </div>

            </div>

            <section className="projects-grid">

                {

                    projects.map(project => (

                        <ProjectCard

                            key={project.name}

                            project={project}

                        />

                    ))

                }

            </section>

        </main>

    );

}