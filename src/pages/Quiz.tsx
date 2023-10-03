import React, { useEffect, useState } from "react";

import Card from "../components/Card";
import Button from "../components/Button";
import TextProgression from "../components/TextProgression";

type word = { est: string; rus: string };

interface IQuizProps {
    words: word[];
    topic: string;
}

function Quiz(props: IQuizProps) {
    const words = props.words;

    let maxCount = words.length;
    let [currentWord, setCurrentWord] = useState(words[0]);
    let [count, setCount] = useState(0);
    let [isPushed, setIsPushed] = useState(false);

    let HandleClick = () => {
        setTimeout(() => {
            setIsPushed(!isPushed);
        }, 500);
    };

    function nextWord() {
        if (count < maxCount) {
            setCount(count + 1);
            setCurrentWord(words[count]);
        }
    }

    useEffect(() => {
        nextWord();
    }, []);

    return (
        <div className="container" style={{ height: "100vh" }}>
            <div className="row" style={{ width: "100%" }}>
                <div className="col-lg-6 col-12">
                    <div className="item-left">Вернуться</div>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <TextProgression
                        progression={count.toString()}
                        progression_goal={maxCount.toString()}
                        progression_separator="/"
                        text_theme={props.topic}
                    />
                </div>
                <div className="col-12 d-flex justify-content-center flex-grow-1">
                    <Card
                        text={isPushed ? currentWord.rus : currentWord.est}
                        onClick={() => {
                            HandleClick();
                        }}
                    />
                </div>
                <div className="col-lg-4 col-12 d-flex align-items-center  justify-content-center">
                    <Button
                        btnColor="yellow"
                        text="Помню"
                        onClick={() => {
                            nextWord();
                        }}
                        style={{ width: "100%" }}
                    />
                    <div className="separator-buttons"></div>
                    <Button
                        btnColor="black"
                        text="Не помню"
                        onClick={() => {
                            nextWord();
                        }}
                        style={{ width: "100%" }}
                    />
                </div>
            </div>
        </div>
    );
}
export default Quiz;
