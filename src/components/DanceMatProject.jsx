import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// import placeholderImgURL from "../images/placeholder.png";
import dancematImgURL from "../images/danceMat_poster.JPG";
import ProjectsWriteUps from "./ProjectsWriteUps";

function DanceMatProject() {
    return (
        <div id="teleaphasia">
            <Header />

            <ProjectsWriteUps projNumber="1" />

            <Footer />
        </div>
    );
};

export default DanceMatProject;


{/* <div id="main" className="pt-5">
    <Header />
    <h1>Dance Mat Project</h1>
    <img className="projectMainPicture" src={dancematImgURL} />
    <h3>Skills: Python, Raspberry pi</h3>

    <h2>The Problem</h2>

    <p>I took a module on gerontechnology in university & our each of our teams were assigned to a senior care centre.
        My team worked with SASCO@Compassvale to discover what the needs & wants of the elderly were
        & what product we could create for them.</p>

    <p>After several rounds of interviews, it was clear that the elderly did not require our help to perform functional day-to-day tasks,
        but many expressed that they would like some activity which would stimulate them mentally
        & help them build up some physical strength, specifically in their legs for better mobility.</p>

    <h2>The Solution</h2>

    <p>My team soon became inspired by the game Dance Dance Revolution.
        This game displayed a random series of arrows (pointing up, down, left or right) on a screen in time to some music.
        Players will have to step on buttons on the floor with the corresponding arrow in order to score points.
        Not only would this game require the elderly to move their lower bodies,
        it would help sharpen their eye-foot coordination while the music can
        reduce their stress & anxiety & make the game more enjoyable. </p>

    <p>We created a mat with a non-slip surface & capacitive sensor under the arrows.
        Whenever a button was pressed, the capacitive sensors sent the input to a Raspberry Pi
        which contains a Python code that played the music, generated the series of arrows & scored the player's performance.</p>

    <p>Unity allowed us to generate a more sophisticated game display
        with arrows falling from the top of the screen & to create a leaderboard.</p>
</div> */}