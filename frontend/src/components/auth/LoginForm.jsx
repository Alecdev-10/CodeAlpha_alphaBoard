import { useState, useEffect, useRef } from "react";
import { useNavigate, Link, useLocation} from "react-router-dom";

import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";

import useAuth from "@/hooks/queries/useAuth";
import { Eye, EyeOff, Mail, Lock, TriangleAlert } from "lucide-react";

import "./LoginForm.css";

export default function LoginForm() {

    const navigate = useNavigate();
    
    const location = useLocation();

    const { loginUser } = useAuth();

    const [credentials, setCredentials] = useState({

        email: location.state?.email ?? "",

        password: location.state?.password ?? "",

    });

    const [showPassword, setShowPassword] = useState(false);

    const [error, setError] = useState("");

    const buttonRef = useRef(null);

        useEffect(() => {

            if (location.state) {

                buttonRef.current?.focus();

            }

        }, [location.state]);

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

                error.response

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

                    ref = {buttonRef}

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

                <p className="auth-switch">

                    Don't have an account yet?

                    <Link to="/register">

                        Create one

                    </Link>

                </p>

            </form>

        </div>

    );

}