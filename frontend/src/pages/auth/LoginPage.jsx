import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "@/hooks/queries/useAuth";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function LoginPage() {

    const navigate = useNavigate();

    const { loginUser } = useAuth();

    const [credentials, setCredentials] = useState({

        email: "",

        password: "",

    });

    const [error, setError] = useState("");

    const [isSubmitting, setIsSubmitting] = useState(false);

    function handleChange(event) {

        const { name, value } = event.target;

        setCredentials((previous) => ({

            ...previous,

            [name]: value,

        }));

    }

    async function handleSubmit(event) {

        event.preventDefault();

        setError("");

        setIsSubmitting(true);

        try {

            await loginUser(credentials);

            navigate("/dashboard");

        }

        catch (error) {

            setError(

                error.response?.data?.detail ||

                "Invalid username or password."

            );

        }

        finally {

            setIsSubmitting(false);

        }

    }

    return (

        <main>

            <h1>AlphaBoard</h1>

            <p>Sign in to continue.</p>

            <form onSubmit={handleSubmit}>

                <Input

                    type="email"

                    name="email"

                    placeholder="Email"

                    value={credentials.email}

                    onChange={handleChange}

                    required

                />

                <Input

                    type="password"

                    name="password"

                    placeholder="Password"

                    value={credentials.password}

                    onChange={handleChange}

                    required

                />

                {

                    error && (

                        <p>

                            {error}

                        </p>

                    )

                }

                <Button

                    type="submit"

                    disabled={isSubmitting}

                >

                    {

                        isSubmitting

                            ? "Signing in..."

                            : "Sign In"

                    }

                </Button>

            </form>

        </main>

    );

}