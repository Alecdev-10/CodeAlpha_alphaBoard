import "./SidebarItem.css";

export default function SidebarItem({

    icon: Icon,

    label,

    active = false,

}){

    return(

        <button

            className={`sidebar-item ${active ? "active" : ""}`}

        >

            <Icon size={20}/>

            <span>

                {label}

            </span>

        </button>

    );

}