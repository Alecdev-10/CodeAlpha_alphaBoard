import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";

import useAuth from "@/hooks/queries/useAuth";
import { Eye, EyeOff, Mail, Lock, TriangleAlert } from "lucide-react";

import "./LoginForm.css";

export default function LoginForm() {

    const navigate = useNavigate();

    const { loginUser } = useAuth();

    const [credentials, setCredentials] = useState({

        email: "",

        password: "",

    });

    const [showPassword, setShowPassword] = useState(false);

    const [error, setError] = useState("");

    const [isSubmitting, setIsSubmitting] = useState(false);

    function handleChange(event) {

        const { name, value } = event.target;

        setCredentials(previous => ({

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

                "Invalid email or password."

            );

        }

        finally{

            setIsSubmitting(false);

        }

    }

    return (

        <div className="login-card">

            <header className="login-card__header">

                <span className="login-badge">

                    Welcome Back

                </span>

                <h2>

                    Sign in

                </h2>

                <p>

                    Continue managing your projects
                    and collaborating with your team.

                </p>

            </header>

            {

                error && (

                    <div className="login-error">

                        <TriangleAlert size={18}/>

                        <span>

                            {error}

                        </span>

                    </div>

                )

            }

            <form

                className="login-form"

                onSubmit={handleSubmit}

            >

                <Input

                    label="Email"

                    type="email"

                    name="email"

                    value={credentials.email}

                    onChange={handleChange}

                    placeholder="john@example.com"

                    required

                    icon={<Mail size={18}/>}

                />

                <div className="password-field">

                    <Input

                        label="Password"

                        type={

                            showPassword

                                ? "text"

                                : "password"

                        }

                        name="password"

                        value={credentials.password}

                        onChange={handleChange}

                        placeholder="••••••••"

                        required

                        icon={<Lock size={18}/>}

                    />

                    <button

                        type="button"

                        className="toggle-password"

                        onClick={() =>

                            setShowPassword(previous => !previous)

                        }

                    >

                        {

                            showPassword

                                ? <EyeOff size={18}/>

                                : <Eye size={18}/>

                        }

                    </button>

                </div>

                <Button

                    type="submit"

                    disabled={isSubmitting}

                    fullWidth

                >

                    {

                        isSubmitting

                            ? "Signing in..."

                            : "Sign In"

                    }

                </Button>

            </form>

        </div>

    );

}