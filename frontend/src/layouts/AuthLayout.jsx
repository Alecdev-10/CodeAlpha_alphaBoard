import Logo from "@/components/auth/Logo";
import "./AuthLayout.css";

export default function AuthLayout({ children }) {

    return (

        <main className="auth-layout">

            <section className="auth-brand">

                <Logo />

                <div className="auth-brand__content">

                    <span className="brand-badge">
                        Project Management Platform
                    </span>

                    <h1>

                        Manage projects.
                        <br />
                        Track progress.
                        <br />
                        Deliver faster.

                    </h1>

                    <p>

                        AlphaBoard centralizes your projects,
                        tasks and collaboration in one modern workspace.

                    </p>

                </div>

            </section>

            <section className="auth-content">

                {children}

            </section>

        </main>

    );

}