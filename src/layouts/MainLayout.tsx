import React, { ReactNode, useState } from "react";
import "./MainLayout.css";
import Sidebar from "../components/sidebar/Sidebar";

interface IMainLayoutProps {
    children: ReactNode;
}

export default function MainLayout({ children }: IMainLayoutProps) {
    let [sidebarIsVisible, setSidebarIsVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarIsVisible(!sidebarIsVisible);
    };

    return (
        <div className="container main-layout">
            <div className="row main-layout__header">
                <nav>
                    <i className="bi bi-list" onClick={toggleSidebar}></i>

                    <Sidebar
                        isVisible={sidebarIsVisible}
                        setIsVisible={setSidebarIsVisible}
                    />
                </nav>
            </div>
            {sidebarIsVisible && <div className="sidebar-open-overlay"> </div>}

            {children}
        </div>
    );
}
