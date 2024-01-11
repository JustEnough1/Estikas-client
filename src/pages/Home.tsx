import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Toolbar from "../components/toolbar/Toolbar";
import "./Home.css";
import SelectionCard from "../components/selectionCard/SelectionCard";

export default function Home() {
    return (
        <MainLayout>
            <Toolbar />
            <div className="row mt-5">
                <div className="container mb-4 selection-category">
                    <h5>Категория</h5>
                    <div className="row flex-nowrap py-5 selections-group">
                        <div className="col-lg-5 col-10">
                            <SelectionCard
                                title="Тема 1"
                                level="easy"
                                description="Короткое описание"
                                tags={["легко", "10 cлов"]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
