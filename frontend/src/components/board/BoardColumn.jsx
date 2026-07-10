import "./BoardColumn.css";

export default function BoardColumn({

    title,

    color,

    count,

    children,

}) {

    return (

        <section className="board-column">

            <header className="board-column__header">

                <div className="board-column__title">

                    <span

                        className="board-column__dot"

                        style={{

                            background: color,

                        }}

                    />

                    <h3>

                        {title}

                    </h3>

                </div>

                <span className="board-column__count">

                    {count}

                </span>

            </header>

            <div className="board-column__content">

                {children}

            </div>

            <button className="board-column__add">

                + Add task

            </button>

        </section>

    );

}