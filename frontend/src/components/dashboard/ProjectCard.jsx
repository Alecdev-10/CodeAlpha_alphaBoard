import "./ProjectCard.css";

export default function ProjectCard({

    project,

}) {

    return (

        <article className="project-card">

            <div

                className="project-banner"

                style={{

                    background: project.gradient,

                }}

            >

                <span>

                    Active Project

                </span>

            </div>

            <div className="project-body">

                <h3>

                    {project.name}

                </h3>

                <p>

                    {project.description}

                </p>

                <div className="project-progress">

                    <div className="progress-track">

                        <div

                            className="progress-fill"

                            style={{

                                width:`${project.progress}%`

                            }}

                        />

                    </div>

                    <span>

                        {project.progress}%

                    </span>

                </div>

                <div className="project-footer">

                    <div className="avatars">

                        <div>A</div>

                        <div>B</div>

                        <div>C</div>

                    </div>

                    <small>

                        {project.tasks} Tasks

                    </small>

                </div>

            </div>

        </article>

    );

}