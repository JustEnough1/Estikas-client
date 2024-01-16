import React from "react";
import Tag from "../tag/Tag";

import "./SelectionCard.css";

interface ISelectionCardProps {
    title: string;
    level: "easy" | "medium" | "hard";
    description: string;
    tags?: string[];
}

export default function SelectionCard({
    title,
    description,
    level,
    tags,
}: ISelectionCardProps) {
    return (
        <div
            className={`selection-card selection-card--${level} d-flex flex-column justify-content-center`}
            tabIndex={0}
        >
            <h4 className="selection-card__title">{title}</h4>
            <p className="selection-card__description">{description}</p>
            <div className="selection-card__tags d-flex flex-wrap">
                {tags?.map((tag, index) => (
                    <Tag key={index} text={tag} />
                ))}
            </div>
        </div>
    );
}
