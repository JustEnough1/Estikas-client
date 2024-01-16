import React, { useState, useEffect } from "react";
import "./FlashCard.css";

interface IFlashCardProps {
    text: TextWithTranslations;
    subtext?: string;
    onClick: Function;
}
export default function FlashCard({
    text,
    subtext = "Переведите слово:",
    onClick,
}: IFlashCardProps) {
    const [isAnimating, setIsAnimating] = useState(false);
    const [currentWord, setCurrentWord] = useState(text.estonian);

    const resetAnimation = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false);
        }, 1000);
    };

    const changeTranslation = () => {
        setTimeout(() => {
            currentWord === text.estonian
                ? setCurrentWord(text.russian)
                : setCurrentWord(text.estonian);
        }, 500);
    };

    return (
        <div
            onClick={() => {
                if (isAnimating) return;
                resetAnimation();
                changeTranslation();
                onClick();
            }}
            className={`flashcard d-flex flex-column align-items-center justify-content-center ${
                isAnimating ? "card-flip-animation" : ""
            }`}
        >
            <p className="flashcard__subtext">{subtext}</p>

            <p className="flashcard__text mt-4">{currentWord}</p>
        </div>
    );
}
