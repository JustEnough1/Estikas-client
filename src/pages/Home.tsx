import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Toolbar from "../components/toolbar/Toolbar";
import "./Home.css";

export default function Home() {
    return (
        <MainLayout>
            <Toolbar />
        </MainLayout>
    );
}
