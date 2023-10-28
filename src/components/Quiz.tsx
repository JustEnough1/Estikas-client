import React, { useEffect, useState } from "react";

import Card from "./Card";
import Button from "./Button";
import { useSelection } from "../Hooks/useSelection";

type word = { est: string; rus: string };

interface IQuizProps {
    words: word[];
    topic: string;
    isHidden: boolean;
    setIsHidden: Function;
}

function Quiz(props: IQuizProps) {
    const words = props.words;
    let maxCount = words.length;
    let [count, setCount] = useState(0);
    let [isPushed, setIsPushed] = useState(false);
    let [currentWordPack, currentWord, removeRememberedWord] =
        useSelection(words);

    let flipCard = () => {
        setTimeout(() => {
            setIsPushed(!isPushed);
        }, 500);
    };

    function nextWord(remembered: boolean = false) {
        if (count < maxCount) {
            if (remembered) removeRememberedWord(currentWord);

            setCount(count + 1);
        }
    }

    useEffect(() => {
        nextWord();
    }, []);

    return (
        <div
            className="container"
            style={{
                height: "100vh",
                display: props.isHidden == true ? "none" : "",
            }}
        >
            <div className="row justify-content-center mt-5">
                <div className="col-lg-6 col-12">
                    <a
                        href="#"
                        style={{
                            textDecoration: "none",
                            color: "var(--black)",
                            display: "flex",
                            alignItems: "center",
                        }}
                        onClick={() => {
                            props.setIsHidden(true);
                        }}
                    >
                        <i className="bi bi-arrow-left"></i> Вернуться
                    </a>
                </div>
            </div>
            <div className="row justify-content-center my-5">
                <div className="col-lg-6 col-12">
                    <h4>Тема: {props.topic}</h4>
                    <h6 className={"mt-2"}>{`${count} / ${maxCount}`}</h6>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-6 col-12">
                    <Card
                        text={isPushed ? currentWord.rus : currentWord.est}
                        onClick={() => {
                            flipCard();
                        }}
                    />
                </div>
            </div>

            <div className="row justify-content-center mt-5">
                <div className="col-lg-3 col-12 mb-lg-0 mb-3">
                    <Button
                        btnColor="yellow"
                        text="Помню"
                        onClick={() => {
                            nextWord(true);
                        }}
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-lg-3 col-12">
                    <Button
                        btnColor="black"
                        text="Не помню"
                        onClick={() => {
                            nextWord(false);
                        }}
                        style={{ width: "100%" }}
                    />
                </div>
            </div>
        </div>
    );
}
export default Quiz;
