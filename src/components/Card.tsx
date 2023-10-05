import React, { useState, useEffect } from "react";
import "./Card.css";

interface IInputProps {
    text: string;
    subtext?: string;
    style?: React.CSSProperties;
    textStyle?: string;
    onClick: Function;
}
export default function Card(props: IInputProps) {
    const [isPressed, setIsPressed] = useState(false);

    const resetAnimation = () => {
        setIsPressed(true);
        setTimeout(() => {
            setIsPressed(false);
        }, 1000);
    };

    return (
        <div
            onClick={() => {
                resetAnimation();
                props.onClick();
            }}
            className={`card-component d-flex flex-column align-items-center justify-content-center ${
                isPressed ? "card-flip-animation" : ""
            }`}
        >
            <p
                className={
                    props.textStyle ? props.textStyle : "subtext-compponent"
                }
            >
                {props.subtext ? props.subtext : "Переведите слово:"}
            </p>

            <p className="card-text-component mt-4">{props.text}</p>
        </div>
    );
}