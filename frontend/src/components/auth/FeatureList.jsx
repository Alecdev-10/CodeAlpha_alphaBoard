import {

    CheckCircle2,
    FolderKanban,
    Users,
    BarChart3,

} from "lucide-react";

import "./FeatureList.css";

const features = [

    {
        icon: FolderKanban,
        text: "Organize projects with Kanban boards",
    },

    {
        icon: Users,
        text: "Collaborate with your entire team",
    },

    {
        icon: BarChart3,
        text: "Track progress in real time",
    },

];

export default function FeatureList() {

    return (

        <ul className="feature-list">

            {

                features.map(({ icon: Icon, text }) => (

                    <li
                        key={text}
                        className="feature-item"
                    >

                        <CheckCircle2
                            size={18}
                            className="feature-check"
                        />

                        <Icon
                            size={18}
                            className="feature-icon"
                        />

                        <span>

                            {text}

                        </span>

                    </li>

                ))

            }

        </ul>

    );

}