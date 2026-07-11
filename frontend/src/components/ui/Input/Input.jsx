import "./Input.css";

export default function Input({

    label,

    icon,

    error,

    ...props

}){

    return(

        <div className="input-group">

            {

                label &&

                <label className="input-label">

                    {label}

                </label>

            }

            <div className="input-wrapper">

                {

                    icon &&

                    <span className="input-icon">

                        {icon}

                    </span>

                }

                <input

                    className={`input ${error ? "input--error" : ""}`}

                    {...props}

                />

            </div>

            {

                error &&

                <small className="input-error">

                    {error}

                </small>

            }

        </div>

    );

}