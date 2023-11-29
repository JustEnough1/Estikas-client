import React, { ReactNode } from "react";
import NavigationPanel from "../components/NavigationPanel";

import "./MainLayout.css";

interface IMainLayoutProps {
    headerTitle: string;
    headerIconClassName: string;
    currentNavigationTab: "home" | "profile" | "settings";
    children: ReactNode;
}

export default function MainLayout({
    headerTitle,
    headerIconClassName,
    currentNavigationTab,
    children,
}: IMainLayoutProps) {
    return (
        <div className="container main-layout">
            <div className="row main-layout-header">
                <div className="col-12">
                    <header className="d-flex flex-column align-items-center justify-content-center">
                        <i className={headerIconClassName}></i>
                        <h2 style={{ textAlign: "center" }}>{headerTitle}</h2>
                    </header>
                </div>
            </div>
            <div className="row main-layout-body">
                <div className="col-12 ">{children}</div>
            </div>
            <div className="row">
                <div className="col-12">
                    <NavigationPanel currentTab={currentNavigationTab} />
                </div>
            </div>
        </div>
    );
}
