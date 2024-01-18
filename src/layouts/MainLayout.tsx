import React, { ReactNode, useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Overlay from "../components/overlay/Overlay";

import "./MainLayout.css";

interface IMainLayoutProps {
    children: ReactNode;
}

export default function MainLayout({ children }: IMainLayoutProps) {
    let [sidebarIsVisible, setSidebarIsVisible] = useState(false);
    let [showOverlay, setShowOverlay] = useState(false);

    const toggleSidebar = () => {
        setSidebarIsVisible(!sidebarIsVisible);
        setShowOverlay(!showOverlay);
    };

    return (
        <div className="container main-layout">
            <div className="row main-layout__header">
                <nav>
                    <i className="bi bi-list" onClick={toggleSidebar}></i>

                    <Sidebar
                        toggleVisibility={toggleSidebar}
                        isVisible={sidebarIsVisible}
                    />
                </nav>
            </div>
            {showOverlay && <Overlay />}

            {children}
        </div>
    );
}
