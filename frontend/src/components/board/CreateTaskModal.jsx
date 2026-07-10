import { useState } from "react";

import Modal from "@/components/ui/Modal/Modal";
import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";

export default function CreateTaskModal({

    open,

    onClose,

}) {

    const [title, setTitle] = useState("");

    return (

        <Modal

            open={open}

            title="Create Task"

            onClose={onClose}

        >

            <Input

                label="Title"

                value={title}

                onChange={(event)=>

                    setTitle(event.target.value)

                }

                placeholder="Task title"

            />

            <div style={{height:"18px"}}/>

            <textarea

                className="textarea"

                placeholder="Description"

                rows={5}

            />

            <div style={{height:"24px"}}/>

            <Button fullWidth>

                Create Task

            </Button>

        </Modal>

    );

}