import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import WordTranslationQuiz from "./pages/wordTranslationQuiz/WordTranslationQuiz";

import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/learn/:id" element={<WordTranslationQuiz />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
