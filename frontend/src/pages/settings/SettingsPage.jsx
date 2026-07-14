import Input from "@/components/ui/Input/Input";
import Button from "@/components/ui/Button/Button";

import useAuth from "@/hooks/queries/useAuth";

import "./SettingsPage.css";

export default function SettingsPage() {

    const { user, logoutUser } = useAuth();

    return (

        <main className="settings-page">

            <header className="settings-header">

                <h1>

                    Settings

                </h1>

                <p>

                    Manage your account and preferences.

                </p>

            </header>

            <section className="settings-section">

                <h2>

                    Profile

                </h2>

                <div className="settings-grid">

                    <Input

                        label="Username"

                        value={user?.username || ""}

                        disabled

                    />

                    <Input

                        label="Email"

                        value={user?.email || ""}

                        disabled

                    />

                </div>

                <Button disabled>

                    Save Changes

                </Button>

            </section>

            <section className="settings-section">

                <h2>

                    Preferences

                </h2>

                <div className="settings-preferences">

                    <label>

                        <input type="checkbox" />

                        Enable notifications

                    </label>

                    <label>

                        <input type="checkbox" />

                        Dark mode

                    </label>

                </div>

            </section>

            <section className="settings-section">

                <h2>

                    Security

                </h2>

                <Button disabled>

                    Change Password

                </Button>

            </section>

            <section className="settings-danger">

                <h2>

                    Danger Zone

                </h2>

                <p>

                    Sign out from your current session.

                </p>

                <Button

                    onClick={logoutUser}

                >

                    Logout

                </Button>

            </section>

        </main>

    );

}