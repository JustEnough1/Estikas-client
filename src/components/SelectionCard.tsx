import React from "react";

import "./SelectionCard.css";

interface ISelectionCardProps {
    iconClassName: string;
    title: string;
}

export default function SelectionCard({
    iconClassName,
    title,
}: ISelectionCardProps) {
    return (
        <div className="selection-card d-flex flex-column justify-content-center align-items-center">
            <i className={iconClassName}></i>
            <p>{title}</p>
        </div>
    );
}
