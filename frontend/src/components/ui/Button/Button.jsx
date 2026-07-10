import "./Button.css";

export default function Button({

    children,

    type = "button",

    disabled = false,

    fullWidth = false,

    onClick,

}) {

    return (

        <button

            type={type}

            disabled={disabled}

            onClick={onClick}

            className={`button ${fullWidth ? "button--full" : ""}`}

        >

            {children}

        </button>

    );

}