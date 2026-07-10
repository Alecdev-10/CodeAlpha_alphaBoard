import StatCard from "@/components/dashboard/StatCard";
import ProjectCard from "@/components/dashboard/ProjectCard";

import "./DashboardPage.css";

export default function DashboardPage() {

    const projects = [

                    {

                        name:"AlphaBoard",

                        description:"Internal project management platform.",

                        progress:72,

                        tasks:21,

                        gradient:"linear-gradient(135deg,#E63946,#C1121F)",

                    },

                    {

                        name:"Website Redesign",

                        description:"Corporate website redesign.",

                        progress:46,

                        tasks:14,

                        gradient:"linear-gradient(135deg,#FF6B35,#E63946)",

                    },

                    {

                        name:"CRM",

                        description:"Improve customer management.",

                        progress:88,

                        tasks:37,

                        gradient:"linear-gradient(135deg,#FF4757,#E84393)",

                    },

                ];

    return (

        <>

            <section className="stats-grid">

                <StatCard

                    title="Total Projects"

                    value="12"

                />

                <StatCard

                    title="In Progress"

                    value="5"

                    color="#FFB703"

                />

                <StatCard

                    title="Completed"

                    value="7"

                    color="#2ECC71"

                />

                <StatCard

                    title="Assigned to me"

                    value="18"

                />

            </section>

            <section className="projects-grid">

                {

                    projects.map(project=>(

                        <ProjectCard

                            key={project.name}

                            project={project}

                        />

                    ))

                }

            </section>

        </>

    );

}