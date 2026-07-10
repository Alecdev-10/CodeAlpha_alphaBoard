import { X } from "lucide-react";

import "./Modal.css";

export default function Modal({

    open,

    title,

    children,

    onClose,

}) {

    if (!open) {

        return null;

    }

    return (

        <div
            className="modal-overlay"
            onClick={onClose}
        >

            <div
                className="modal"

                onClick={(event) =>

                    event.stopPropagation()

                }
            >

                <header className="modal-header">

                    <h2>

                        {title}

                    </h2>

                    <button
                        className="modal-close"

                        onClick={onClose}
                    >

                        <X size={20}/>

                    </button>

                </header>

                <div className="modal-content">

                    {children}

                </div>

            </div>

        </div>

    );

}