import React from "react";
// import NoLinkPage from "./NoLinkPage";
// import Home from "./Home";
// import TeleaphasiaProject from "./TeleaphasiaProject";
// import DanceMatProject from "./DanceMatProject";
import { HashRouter, Route, Routes } from "react-router-dom";
import Routing from "./Routing";

function App() {
    return (
        <div id="wrap">
            <HashRouter>
                <Routing />
            </HashRouter>
        </div>
    );
};

export default App;