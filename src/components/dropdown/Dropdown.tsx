import React, { useState } from "react";
import "./Dropdown.css";
import Input from "../input/Input";

interface IDropdownProps {
    heading: string;
    options: string[];
}

export default function Dropdown({ heading, options }: IDropdownProps) {
    let [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="row align-items-center dropdown">
            <div className="col dropdown__heading">
                <h6>
                    <b>{heading}</b>
                </h6>
            </div>
            <div className="col-auto dropdown__arrow">
                <a onClick={toggleDropdown}>
                    <i
                        className={`bi bi-chevron-${isOpen ? "up" : "down"}`}
                    ></i>
                </a>
            </div>
            <div
                className={`col-12 dropdown__options ${
                    isOpen ? "dropdown__options--active" : ""
                }`}
            >
                <div className="col-12">
                    {options.map((option, index) => {
                        return (
                            <div className="row" key={index}>
                                <div className="col">
                                    <label htmlFor={option}>{option}</label>
                                </div>
                                <div className="col-auto">
                                    <input
                                        type="checkbox"
                                        id={option}
                                        className="col-auto"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
