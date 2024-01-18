import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import Toolbar from "../../components/toolbar/Toolbar";
import SelectionCard from "../../components/selectionCard/SelectionCard";
import "./HomePage.css";
import { Link } from "react-router-dom";

export default function HomePage() {
    // Testing mock data
    let mockSelections: WordSelection[] = [
        {
            id: "1",
            category: "Категория",
            title: "Тема 1",
            description: "Короткое описание",
            level: "easy",
            tags: ["Легко"],
        },
        {
            id: "2",
            category: "Категория",
            title: "Тема 2",
            description: "Короткое описание",
            level: "medium",
            tags: ["средне"],
        },
        {
            id: "3",
            category: "Категория 2",
            title: "Тема 1",
            description: "Короткое описание",
            level: "hard",
            tags: ["сложно"],
        },
    ];

    let categories: { [key: string]: WordSelection[] } = {};

    mockSelections.forEach((selection) => {
        if (!categories[selection.category])
            categories[selection.category] = [];
        categories[selection.category].push(selection);
    });

    return (
        <MainLayout>
            <Toolbar />
            <div className="row mt-5">
                {Object.entries(categories).map(([category, selections]) => {
                    return (
                        <div className="container mb-4 selection-category">
                            <h5 className="primary-text">{category}</h5>
                            <div className="row flex-nowrap py-5 selections-group">
                                {selections.map((selection) => {
                                    return (
                                        <div className="col-lg-5 col-11">
                                            <Link to={`/learn/${selection.id}`}>
                                                <SelectionCard
                                                    selection={selection}
                                                />
                                            </Link>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </MainLayout>
    );
}
