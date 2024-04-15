import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function TeleaphasiaProject() {
    return(
        <div id="teleaphasia">
            <div id="main" className="pt-5">
                <Header />
                <h1>Teleaphasia Project</h1>
                <p>Skills: PHP, Laravel, Python, Swift</p>
                {/* Use logos to represent the skills */}
                <p>Built python code to parse a list of verb-noun pairings to come up with exercises for patients where they would have to match appropriate verbs & nouns together.</p>
                <p>Learnt to code with PHP to build a website that would allow speech therapists to log in, generate & assign exercises to their patients.</p>
                <p>Used Swift to mock-up an app interface which the patient would interact with to complete the assigned exercises.</p>
            </div>
            <Footer />
        </div>
    );
};

export default TeleaphasiaProject;