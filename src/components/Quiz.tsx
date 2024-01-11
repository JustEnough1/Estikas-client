import React, { useEffect, useState } from "react";

import Card from "./card/Card";
import Button from "./button/Button";
import { useSelection } from "../hooks/useSelection";
import useNextWord from "../hooks/useNextWord";

interface IQuizProps {
    words: word[];
    topic: string;
    isHidden: boolean;
    setIsHidden: Function;
}

function Quiz(props: IQuizProps) {
    const words = props.words;

    let [isPushed, setIsPushed] = useState(false);
    let { currentSelection, nextSelection } = useSelection(words, 3);
    let { currentWord, nextWord } = useNextWord(currentSelection);

    let [countDone, setCountDone] = useState(1);
    let [countLeft, setCountLeft] = useState(currentSelection.length);

    let [isFinished, setIsFinished] = useState(false);

    let flipCard = () => {
        setTimeout(() => {
            setIsPushed(!isPushed);
        }, 500);
    };

    const updateCounter = () => {
        if (countDone === countLeft) {
            setCountDone(1);
            nextSelection();
            return;
        }
        setCountDone(countDone + 1);
    };

    useEffect(() => {
        if (currentSelection.length === 0) setIsFinished(true);
        setCountLeft(currentSelection.length);
    }, [currentSelection]);

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
            {isFinished && (
                <div className="row justify-content-center my-5">
                    <div className="col-lg-6 col-12">
                        <h4 className="mx-auto">
                            Тема "{props.topic}" пройдена!
                        </h4>
                    </div>
                </div>
            )}
            {currentWord && (
                <>
                    <div className="row justify-content-center my-5">
                        <div className="col-lg-6 col-12">
                            <h4>Тема: {props.topic}</h4>
                            <h6
                                className={"mt-2"}
                            >{`${countDone} / ${countLeft}`}</h6>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-12">
                            {currentWord && (
                                <Card
                                    text={
                                        isPushed
                                            ? currentWord.rus
                                            : currentWord.est
                                    }
                                    onClick={() => {
                                        flipCard();
                                    }}
                                />
                            )}
                        </div>
                    </div>

                    <div className="row justify-content-center mt-5">
                        <div className="col-lg-3 col-12 mb-lg-0 mb-3">
                            <Button
                                btnColor="blue"
                                text="Помню"
                                onClick={() => {
                                    updateCounter();
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
                </>
            )}
        </div>
    );
}
export default Quiz;
