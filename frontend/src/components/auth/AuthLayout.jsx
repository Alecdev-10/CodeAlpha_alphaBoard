import "./AuthLayout.css";

import Logo from "./Logo";
import FeatureList from "./FeatureList";

export default function AuthLayout({ children }) {

    return (

        <main className="auth-layout">

            <section className="auth-layout__branding">

                <Logo />

                <div className="auth-layout__hero">

                    <h1>
                        Manage projects.
                        <br />
                        Track progress.
                        <br />
                        Deliver faster.
                    </h1>

                    <p>
                        AlphaBoard helps your team organize work,
                        collaborate efficiently and deliver projects
                        with confidence.
                    </p>

                </div>

                <FeatureList />

                <span className="auth-layout__version">
                    Version 1.0
                </span>

            </section>

            <section className="auth-layout__content">

                {children}

            </section>

        </main>

    );

}