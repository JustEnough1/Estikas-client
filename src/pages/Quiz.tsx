import React, { useEffect, useState } from "react";

import Card from "../components/Card";
import Button from "../components/Button";

type word = { est: string; rus: string };

interface IQuizProps {
    words: word[];
    topic: string;
}

function Quiz(props: IQuizProps) {
    const words = props.words;

    let [wordState, setWordState] = useState('est');
    let maxCount = words.length;
    let [currentWord, setCurrentWord] = useState(words[0]);
    let [count, setCount] = useState(0);
    let [isPushed, setIsPushed] = useState(false);

    let HandleClick = () => {
        setTimeout(() => {
            if(wordState == 'rus'){
                setWordState('est')
                nextWord()
            } else if (wordState == 'est' ){
                setWordState('rus');
            }
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
            <div className="row justify-content-center mt-5">
                <div className="col-lg-6 col-12">
                    <a
                        href="#"
                        style={{
                            textDecoration: "none",
                            color: "var(--black)",
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
                            HandleClick();
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
                            nextWord();
                        }}
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-lg-3 col-12">
                    <Button
                        btnColor="black"
                        text="Не помню"
                        onClick={() => {
                            HandleClick();
                        }}
                        style={{ width: "100%" }}
                    />
                </div>
            </div>
        </div>
    );
}
export default Quiz;
