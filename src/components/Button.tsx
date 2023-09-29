import React, { useState } from "react";

import "./Button.css";

interface IButtonProps {
    text: string;
    style?: React.CSSProperties;
    btnColor: "black" | "yellow";
    onClick: Function;
}

export default function Button(props: IButtonProps) {
    let [isAnimated, setIsAnimated] = useState<boolean>(false);

    const setAnimation = () => {
        setIsAnimated(true);
        setTimeout(() => setIsAnimated(false), 500);
    };

    return (
        <button
            className={`btn btn-${props.btnColor} ${
                isAnimated ? "button-press-animation" : ""
            }`}
            style={props.style}
            onClick={() => {
                props.onClick();
                setAnimation();
            }}
        >
            {props.text}
        </button>
    );
}
