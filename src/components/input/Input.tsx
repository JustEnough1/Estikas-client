import React, { HTMLInputTypeAttribute } from "react";
import "./Input.css";

interface IInputProps {
    placeholder: string;
    type: HTMLInputTypeAttribute;
}

export default function Input(props: IInputProps) {
    return (
        <input
            className="input"
            type={props.type}
            placeholder={props.placeholder}
        />
    );
}
