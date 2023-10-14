import React, { useState } from "react";

import "./App.css";
import Home from "./pages/Home";
import PersinalPage from "./pages/personalPage";

function App() {
    return <PersinalPage User={{
        Name: "Григорий",
        LastName: "Бырокав"
    }} />;
}
export default App;
