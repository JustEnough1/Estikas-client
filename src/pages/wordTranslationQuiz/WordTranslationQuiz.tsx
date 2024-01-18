import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";

import FlashCard from "../../components/flashCard/FlashCard";
import Button from "../../components/button/Button";

import useSelection from "../../hooks/useSelection";
import useNextWord from "../../hooks/useNextWord";
import Overlay from "../../components/overlay/Overlay";
import Modal from "../../components/modal/Modal";

import "./WordTranslationQuiz.css";

type WordTranslationQuizData = {
    topic: string;
    words: TextWithTranslations[];
};

export default function WordTranslationQuiz() {
    let { id } = useParams();

    const [timestamp, setTimestamp] = useState(Date.now());

    function formatElapsedTime(startTimestamp: number, endTimestamp: number) {
        const elapsedMilliseconds = endTimestamp - startTimestamp;
        const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);

        if (elapsedSeconds < 60) {
            return `${elapsedSeconds} ${
                elapsedSeconds === 1 ? "секунду" : "секунд"
            }`;
        }

        const elapsedMinutes = Math.floor(elapsedSeconds / 60);

        if (elapsedMinutes < 60) {
            return `${elapsedMinutes} ${
                elapsedMinutes === 1 ? "минуту" : "минут"
            }`;
        }

        const elapsedHours = Math.floor(elapsedMinutes / 60);
        return `${elapsedHours} ${elapsedHours === 1 ? "час" : "часа"}`;
    }

    const getTimePassed = () => {
        const startTimestamp = timestamp;
        const endTimestamp = Date.now();
        return formatElapsedTime(startTimestamp, endTimestamp);
    };

    // Testing mock data
    const response: WordTranslationQuizData = {
        topic: "Для начинающих",
        words: [
            { estonian: "Tere", russian: "Привет" },
            { estonian: "Head aega", russian: "Пока" },
            { estonian: "Saame tuttavaks", russian: "Давай познакомимся" },
            { estonian: "Nägemist", russian: "До встречи" },
            { estonian: "Tere tulemast", russian: "Добро пожаловать" },
            { estonian: "Vabandust", russian: "Извини" },
            { estonian: "Aitäh", russian: "Спасибо" },
            { estonian: "Palun", russian: "Пожалуйста" },
            { estonian: "Jah", russian: "Да" },
            { estonian: "Ei", russian: "Нет" },
            { estonian: "Kuidas läheb?", russian: "Как дела?" },
            { estonian: "Mul läheb hästi", russian: "У меня все хорошо" },
            {
                estonian: "Kui palju see maksab?",
                russian: "Сколько это стоит?",
            },
            { estonian: "Ma ei saa aru", russian: "Я не понимаю" },
            {
                estonian: "Palun räägi aeglasemalt",
                russian: "Пожалуйста, говорите медленнее",
            },
            {
                estonian: "Ma õpin eesti keelt",
                russian: "Я учу эстонский язык",
            },
        ],
    };

    const selections = useSelection(response.words);
    const { currentWord, nextWord, rememberedWordsCount } =
        useNextWord(selections);

    return (
        <MainLayout>
            <div className="row mt-5 quiz">
                <div className="container mb-4 quiz__header mb-5">
                    <div className="row">
                        <div className="col-12 quiz__title primary-text mb-3">
                            <h5>Тема: {response.topic}</h5>
                        </div>
                        <div className="col-12 word-coutner">
                            <h6>
                                {`${rememberedWordsCount} / ${selections.currentSelection.length}`}
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="container mb-4 quiz__body">
                    <div className="row justify-content-center">
                        {currentWord === null ? (
                            <div className="col-lg-6 col-12">
                                <Overlay />
                                <Modal>
                                    <div className="solved-modal">
                                        <div className="row">
                                            <div className="col-12">
                                                <h1>
                                                    Отлично! Все слова выучены!
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <p className="mt-3">
                                                    Вы выучили все слова за{" "}
                                                    <b className="primary-text">
                                                        {getTimePassed()}
                                                    </b>
                                                    ! Это отличный результат!
                                                </p>
                                                <p className="mt-4">
                                                    Нажмите "Далее", чтобы
                                                    вернуться на главную
                                                    страницу.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <Link to={"/"}>
                                                    <Button
                                                        text={"Далее"}
                                                        btnColor="blue"
                                                        onClick={() => {}}
                                                    />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Modal>
                            </div>
                        ) : (
                            <div className="col-lg-6 col-12">
                                {currentWord && (
                                    <FlashCard text={currentWord} />
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <div className="container mb-4 quiz__footer">
                    <div className="row">
                        <div className="col">
                            <Button
                                text={"Помню"}
                                btnColor={"blue"}
                                onClick={() => nextWord(true)}
                            />
                        </div>
                        <div className="col">
                            <Button
                                text={"Не помню"}
                                onClick={() => nextWord(false)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
