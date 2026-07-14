import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";

import useAuth from "@/hooks/queries/useAuth";

import {
    User,
    Mail,
    Lock,
    Eye,
    EyeOff,
    TriangleAlert,
} from "lucide-react";

import "./RegisterForm.css";

export default function RegisterForm() {

    const navigate = useNavigate();

    const { registerUser } = useAuth();

    const [formData, setFormData] = useState({

        username: "",

        email: "",

        password: "",

        confirmPassword: "",

    });

    const [showPassword, setShowPassword] = useState(false);

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [error, setError] = useState("");

    const [isSubmitting, setIsSubmitting] = useState(false);

    function handleChange(event) {

        const { name, value } = event.target;

        setFormData(previous => ({

            ...previous,

            [name]: value,

        }));

    }

    async function handleSubmit(event) {

        event.preventDefault();

        setError("");

        if (formData.password !== formData.confirmPassword) {

            setError("Passwords do not match.");

            return;

        }

        setIsSubmitting(true);

        try {
            await registerUser(
                {
                    username: formData.username,
                    email: formData.email,
                    password: formData.password,
                }
            );

            navigate("/login", {
                state: {
                    email:formData.email,
                    password:formData.password
                }
            });

        }

        catch (error) {

            setError(

                error.response?.data?.detail ||

                error.response

            );

        }

        finally {

            setIsSubmitting(false);

        }

    }

    return (

        <div className="login-card">

            <header className="login-card__header">

                <span className="login-badge">

                    Welcome

                </span>

                <h2>

                    Create account

                </h2>

                <p>

                    Create your workspace and start managing projects.

                </p>

            </header>

            {

                error && (

                    <div className="login-error">

                        <TriangleAlert size={18} />

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

                    label="Full name"

                    type="text"

                    name="username"

                    value={formData.username}

                    onChange={handleChange}

                    placeholder="John Doe"

                    required

                    icon={<User size={18}/>}

                />

                <Input

                    label="Email"

                    type="email"

                    name="email"

                    value={formData.email}

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

                        value={formData.password}

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

                <div className="password-field">

                    <Input

                        label="Confirm password"

                        type={

                            showConfirmPassword

                                ? "text"

                                : "password"

                        }

                        name="confirmPassword"

                        value={formData.confirmPassword}

                        onChange={handleChange}

                        placeholder="••••••••"

                        required

                        icon={<Lock size={18}/>}

                    />

                    <button

                        type="button"

                        className="toggle-password"

                        onClick={() =>

                            setShowConfirmPassword(previous => !previous)

                        }

                    >

                        {

                            showConfirmPassword

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

                            ? "Creating account..."

                            : "Create account"

                    }

                </Button>

                <p className="auth-switch">

                    Already have an account?

                    <Link to="/login">

                        Sign in

                    </Link>

                </p>

            </form>

        </div>

    );

}