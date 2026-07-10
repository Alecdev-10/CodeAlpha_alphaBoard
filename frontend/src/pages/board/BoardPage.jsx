import BoardColumn from "@/components/board/BoardColumn";
import TaskCard from "@/components/board/TaskCard";
import { useState } from "react";

import CreateTaskModal from "@/components/board/CreateTaskModal";


import "./BoardPage.css";

const columns = [

    {
        title: "To Do",
        color: "#E63946",
    },

    {
        title: "In Progress",
        color: "#F4A261",
    },

    {
        title: "Review",
        color: "#3A86FF",
    },

    {
        title: "Done",
        color: "#2A9D8F",
    },

];

const tasks = [

    {

        title: "Authentication",

        description: "Implement JWT login flow.",

        priority: "High",

        comments: 4,

        files: 2,

    },

    {

        title: "Dashboard",

        description: "Create project statistics cards.",

        priority: "Medium",

        comments: 1,

        files: 0,

    },

];


export default function BoardPage() {

    const [openModal, setOpenModal] = useState(false);


    return (

        <main className="board">

            <header className="board-header">

                <div>

                    <h1>

                        AlphaBoard

                    </h1>

                    <p>

                        12 Tasks · 5 Members

                    </p>

                </div>

                <button

                    className="new-task-button"

                    onClick={()=>

                        setOpenModal(true)

                    }

                >

                    + New Task

                </button>

            </header>
            
            <div className="board-columns">

            {
                
                columns.map(column => (

                    <BoardColumn

                        key={column.title}

                        title={column.title}

                        color={column.color}

                        count={tasks.length}

                    >

                        {

                            tasks.map(task => (

                                <TaskCard

                                    key={`${column.title}-${task.title}`}

                                    task={task}

                                />

                            ))

                        }

                    </BoardColumn>

                ))

            }

            </div>

            <CreateTaskModal

                open={openModal}

                onClose={()=>

                    setOpenModal(false)

                }

            />

        </main>


    );

}