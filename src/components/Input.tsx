import React, { HTMLInputTypeAttribute } from "react";
import "./Input.css";

interface IInputProps {
    placeholder: string;
    style?: React.CSSProperties;
    type: HTMLInputTypeAttribute;
    fullWidth?: true | false;
}

export default function Input(props: IInputProps) {
    return (
        <input
            className={`input ${props.fullWidth ? "full-width" : ""}`}
            type={props.type}
            placeholder={props.placeholder}
            style={props.style}
        />
    );
}
