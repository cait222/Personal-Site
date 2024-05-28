import React from "react";
import NoLinkPage from "./NoLinkPage";
import Home from "./Home";
import TeleaphasiaProject from "./TeleaphasiaProject";
import DanceMatProject from "./DanceMatProject";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div id="wrap">

            <Routes>
                <Route exact path="/noLink" element={<NoLinkPage />} />
                <Route exact path="/" element={<Home />} />
                <Route path="*" element={<Home />} />
                <Route exact path="/teleaphasia" element={<TeleaphasiaProject />} />
                <Route exact path="/dancemat" element={<DanceMatProject />} />
            </Routes>

        </div>
    );
};

export default App;