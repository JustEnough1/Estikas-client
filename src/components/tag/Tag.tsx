import React from "react";
import "./Tag.css";

interface ITagProps {
    text: string;
}

export default function Tag({ text }: ITagProps) {
    return <small className="tag p-2">{text}</small>;
}
