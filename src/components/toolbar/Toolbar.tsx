import React, { useState } from "react";
import Button from "../button/Button";
import Input from "../input/Input";
import Overlay from "../overlay/Overlay";
import FiltersModal from "../filtersModal/FiltersModal";
import SortingModal from "../sortingModal/SortingModal";

import "./Toolbar.css";

export default function Toolbar() {
    let [showOverlay, setShowOverlay] = useState(false);
    let [showFilters, setShowFilters] = useState(false);
    let [showSorting, setShowSorting] = useState(false);

    const toggleFilters = () => {
        setShowOverlay(!showOverlay);
        setShowFilters(!showFilters);
    };
    const toggleSorting = () => {
        setShowOverlay(!showOverlay);
        setShowSorting(!showSorting);
    };

    return (
        <>
            {showOverlay && <Overlay />}
            {showFilters && <FiltersModal closeModalCallback={toggleFilters} />}
            {showSorting && <SortingModal closeModalCallback={toggleSorting} />}

            <div className="row toolbar mt-4">
                <div className="col-lg-8 col-12 mb-lg-0 mb-4 focus">
                    <Input placeholder={"Поиск"} type={"text"} />
                </div>
                <div className="col-lg-2 col-6">
                    <Button
                        text={"Фильтры"}
                        btnColor={"blue"}
                        iconRenderer={() => <i className="bi bi-funnel"></i>}
                        onClick={toggleFilters}
                    />
                </div>

                <div className="col-lg-2 col-6">
                    <Button
                        text={"Сортировка"}
                        btnColor={"black"}
                        iconRenderer={() => <i className="bi bi-sort-up"></i>}
                        onClick={toggleSorting}
                    />
                </div>
            </div>
        </>
    );
}
