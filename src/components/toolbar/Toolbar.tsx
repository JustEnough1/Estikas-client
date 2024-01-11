import React from "react";
import Button from "../button/Button";
import Input from "../input/Input";
import "./Toolbar.css";

export default function Toolbar() {
    return (
        <div className="row toolbar mt-4">
            <div className="col-lg-8 col-12 mb-lg-0 mb-4">
                <Input placeholder={"Поиск"} type={"text"} />
            </div>
            <div className="col-lg-2 col-6">
                <Button
                    text={"Фильтры"}
                    btnColor={"blue"}
                    iconRenderer={() => <i className="bi bi-funnel"></i>}
                    onClick={() => {}}
                />
            </div>

            <div className="col-lg-2 col-6">
                <Button
                    text={"Сортировка"}
                    btnColor={"black"}
                    iconRenderer={() => <i className="bi bi-sort-up"></i>}
                    onClick={() => {}}
                />
            </div>
        </div>
    );
}
