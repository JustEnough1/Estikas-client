import React from "react";

import "./NavigationPanel.css";

interface INavigationPanelProps {
    currentTab: "home" | "profile" | "settings";
}

export default function NavigationPanel(props: INavigationPanelProps) {
    return (
        <nav className="navigation-panel d-flex align-items-center justify-content-center">
            <div className="navigation-tab">
                <i
                    className={`bi bi-gear ${
                        props.currentTab === "settings" ? "active-tab" : ""
                    }`}
                ></i>
                <small>Настройки</small>
            </div>
            <div className="navigation-tab">
                <i
                    className={`bi bi-house ${
                        props.currentTab === "home" ? "active-tab" : ""
                    }`}
                ></i>
                <small>Главная</small>
            </div>
            <div className="navigation-tab">
                <i
                    className={`bi bi-person ${
                        props.currentTab === "profile" ? "active-tab" : ""
                    }`}
                ></i>
                <small>Профиль</small>
            </div>
        </nav>
    );
}
