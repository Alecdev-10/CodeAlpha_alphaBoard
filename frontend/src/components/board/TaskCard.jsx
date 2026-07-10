import {

    MessageCircle,
    Paperclip,

} from "lucide-react";

import "./TaskCard.css";

const priorityColors = {

    High: "#E63946",
    Medium: "#F4A261",
    Low: "#2A9D8F",

};

export default function TaskCard({

    task,

}) {

    return (

        <article className="task-card">

            <div
                className="task-priority"
                style={{
                    background: priorityColors[task.priority],
                }}
            />

            <h4>

                {task.title}

            </h4>

            <p>

                {task.description}

            </p>

            <div className="task-footer">

                <span
                    className="task-badge"
                    style={{
                        color: priorityColors[task.priority],
                    }}
                >

                    {task.priority}

                </span>

                <div className="task-meta">

                    <span>

                        <MessageCircle size={15} />

                        {task.comments}

                    </span>

                    <span>

                        <Paperclip size={15} />

                        {task.files}

                    </span>

                </div>

            </div>

        </article>

    );

}