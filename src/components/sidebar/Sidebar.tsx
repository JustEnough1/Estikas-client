import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

interface ISidebarProps {
    isVisible: boolean;
    toggleVisibility: Function;
}

export default function Sidebar({
    isVisible,
    toggleVisibility,
}: ISidebarProps) {
    const [isMovedIn, setIsMovedIn] = useState(!isVisible);

    const toggleSidebar = () => {
        if (isVisible) {
            setIsMovedIn(false);
            return setTimeout(() => {
                setIsMovedIn(true);
                toggleVisibility();
            }, 500);
        }
        toggleVisibility();
    };

    return (
        <>
            {isVisible && (
                <div
                    className={
                        "sidebar " +
                        (isMovedIn
                            ? "sidebar-move-in-animation"
                            : "sidebar-move-out-animation")
                    }
                >
                    <i className="bi bi-x-lg" onClick={toggleSidebar}></i>

                    <ul>
                        <li>
                            <Link to={"/"}>Главная</Link>
                        </li>
                        <li>
                            <Link to={"/settings"}>Настройки</Link>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
}
