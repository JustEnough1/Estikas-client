import React from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";

import FlashCard from "../../components/flashCard/FlashCard";
import Button from "../../components/button/Button";

import "./WordTranslationQuiz.css";

export default function WordTranslationQuiz() {
    let { id } = useParams();

    return (
        <MainLayout>
            <div className="row mt-5 quiz">
                <div className="container mb-4 quiz__header mb-5">
                    <div className="row">
                        <div className="col-12 quiz__title primary-text mb-3">
                            <h5>Тема: Тема {id}</h5>
                        </div>
                        <div className="col-12 word-coutner">
                            <h6>1 / 100</h6>
                        </div>
                    </div>
                </div>
                <div className="container mb-4 quiz__body">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-12">
                            <FlashCard
                                text={{ estonian: "Sõna", russian: "Слово" }}
                                onClick={() => {}}
                            />
                        </div>
                    </div>
                </div>
                <div className="container mb-4 quiz__footer">
                    <div className="row">
                        <div className="col">
                            <Button
                                text={"Помню"}
                                btnColor={"blue"}
                                onClick={() => {}}
                            />
                        </div>
                        <div className="col">
                            <Button text={"Не помню"} onClick={() => {}} />
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
