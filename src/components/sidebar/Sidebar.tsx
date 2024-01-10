import React, { useState } from "react";
import "./Sidebar.css";

interface ISidebarProps {
    isVisible: boolean;
    setIsVisible: Function;
}

export default function Sidebar({ isVisible, setIsVisible }: ISidebarProps) {
    const [isMovedIn, setIsMovedIn] = useState(!isVisible);

    const toggleSidebar = () => {
        if (isVisible) {
            setIsMovedIn(false);
            return setTimeout(() => {
                setIsMovedIn(true);
                setIsVisible(false);
            }, 500);
        }

        setIsVisible(!isVisible);
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
                        <li>Главная</li>
                        <li>Настройки</li>
                    </ul>
                </div>
            )}
        </>
    );
}
