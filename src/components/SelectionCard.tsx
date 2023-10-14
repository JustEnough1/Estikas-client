import React from "react";

import "./SelectionCard.css";

interface ISelectionCardProps {
    iconClassName: string;
    title: string;
    clickAction: Function;
}

export default function SelectionCard({
    iconClassName,
    title,
    clickAction
}: ISelectionCardProps) {
    return (
        <div className="selection-card d-flex flex-column justify-content-center align-items-center"
        onClick={() => clickAction()}
        >
            <i className={iconClassName}></i>
            <p>{title}</p>
        </div>
    );
}
