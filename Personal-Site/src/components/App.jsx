import React from "react";
import NoLinkPage from "./NoLinkPage";
import Home from "./Home";
import TeleaphasiaProject from "./TeleaphasiaProject";
import DanceMatProject from "./DanceMatProject";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div id="wrap">
            <BrowserRouter>
                <Routes>
                    <Route exact path="Personal-Site/noLink" element={<NoLinkPage />} />
                    <Route exact path="/" element={<Home />} />
                    <Route path="*" element={<Home />} />
                    <Route exact path="Personal-Site/teleaphasia" element={<TeleaphasiaProject />} />
                    <Route exact path="Personal-Site/dancemat" element={<DanceMatProject />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;