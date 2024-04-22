import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function NoLinkPage() {
    return (
        <div id="main">
            <Header />
            <div id="noLink" className="pt-5 h-100">
                <h1 className="p-5 text-center">Apologies. If you are seeing this page,
                    <br />there is no viewable code for this project.</h1>
            </div>
            <Footer />
        </div>
    );
};

export default NoLinkPage;