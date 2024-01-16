import React, { ReactNode, useState } from "react";

import "./Button.css";

type ButtonColors =
    | "black"
    | "blue"
    | "black-outline"
    | "blue-outline"
    | "danger"
    | "danger-outline"
    | "default";

interface IButtonProps {
    text: string;
    style?: React.CSSProperties;
    btnColor?: ButtonColors;
    onClick: Function;
    iconRenderer?: () => ReactNode;
}
export default function Button({
    text,
    style,
    btnColor = "default",
    onClick,
    iconRenderer,
}: IButtonProps) {
    let [isAnimated, setIsAnimated] = useState<boolean>(false);

    const setAnimation = () => {
        setIsAnimated(true);
        setTimeout(() => setIsAnimated(false), 500);
    };
    return (
        <button
            className={`btn btn--${btnColor} ${
                isAnimated ? "button-press-animation" : ""
            }`}
            style={style}
            onClick={() => {
                onClick();
                setAnimation();
            }}
        >
            {iconRenderer && iconRenderer()}
            {text}
        </button>
    );
}
