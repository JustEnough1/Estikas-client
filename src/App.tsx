import React, { useState } from "react";

import "./App.css";
import Quiz from "./pages/Quiz";

function App() {
    return (
        <Quiz
            words={[
                { est: "Tere", rus: "Привет" },
                { est: "Head", rus: "Хорошо" },
                { est: "Oluline", rus: "Важно" },
            ]}
            topic={"A1 LEVEL"}
        />
    );
}
export default App;
