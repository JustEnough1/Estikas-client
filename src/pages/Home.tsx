import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";

import "./Home.css";
import SelectionCard from "../components/SelectionCard";
import Quiz from "../components/Quiz";

export default function Home() {

    let [hideQuiz, setHideQuiz] = useState(true);

    return (
        <>
        <Quiz setIsHidden={setHideQuiz} isHidden={hideQuiz} words={[{est: 'Tere', rus: 'Привет'},
         {est: 'Head Aega', rus: 'До свидания'}, {est: 'Kokk', rus: 'Повар'},
          {est: 'Piritus', rus: 'Розжиг'} ,{est: 'Juba', rus: 'Уже'}]} topic={"Общение"} />
        <MainLayout
            headerTitle={"Здравствуй *Имя*"}
            headerIconClassName={"bi bi-house"}
            currentNavigationTab={"home"}
        >
            <div className="row">
                <div className="col-12 selections-group">
                    <h5>Подборки слов</h5>
                    <div className="d-flex selections">
                        <SelectionCard
                            clickAction={() => {
                                setHideQuiz(false);
                            }}
                            iconClassName={"bi bi-trophy-fill"}
                            title={"Топ 100 глаголов"}
                            
                        />
                    </div>
                </div>
            </div>
        </MainLayout>
        </>
    );
}
