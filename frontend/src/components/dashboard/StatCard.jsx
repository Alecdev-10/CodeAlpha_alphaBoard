import "./StatCard.css";

export default function StatCard({

    title,

    value,

    color = "var(--primary)",

}) {

    return (

        <article className="stat-card">

            <span>

                {title}

            </span>

            <h2 style={{ color }}>

                {value}

            </h2>

        </article>

    );

}