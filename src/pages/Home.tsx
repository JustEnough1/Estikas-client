import React from "react";
import MainLayout from "../layouts/MainLayout";

import "./Home.css";
import SelectionCard from "../components/SelectionCard";

export default function Home() {
    return (
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
                            iconClassName={"bi bi-trophy-fill"}
                            title={"Топ 100 глаголов"}
                        />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
