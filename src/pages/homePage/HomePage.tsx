import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import Toolbar from "../../components/toolbar/Toolbar";
import SelectionCard from "../../components/selectionCard/SelectionCard";
import "./HomePage.css";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <MainLayout>
            <Toolbar />
            <div className="row mt-5">
                <div className="container mb-4 selection-category">
                    <h5 className="primary-text">Категория</h5>
                    <div className="row flex-nowrap py-5 selections-group">
                        <div className="col-lg-5 col-11">
                            <Link to={"/learn/1"}>
                                <SelectionCard
                                    title="Тема 2"
                                    level="medium"
                                    description="Короткое описание"
                                    tags={["средне", "25 cлов"]}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
