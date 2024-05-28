import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function DanceMatProject() {
    return(
        <div id="teleaphasia">
            <div id="main" className="pt-5">
                <Header />
                <h1>Dance Mat Project</h1>
                <p>Skills: Python, Raspberry pi</p>
                <p>Built code in Python to play songs & generate random arrow sequences to indicate which buttons on the mat the elderly would have to step on.</p>
                <p>Rasberry pi was used to display instructions, the arrow sequences & the scores obtained by the player.</p>
                <p>Used Unity to generate more sophisticated game display with arrows falling from the top of the screen & create a leaderboard.</p>
            </div>
            <Footer />
        </div>
    );
};

export default DanceMatProject;