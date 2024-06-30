import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// import placeholderImgURL from "../images/placeholder.png";
import teleaphasiaImgURL from "../images/aphasia_mcq.JPG";
import ProjectsWriteUps from "./ProjectsWriteUps";

function TeleaphasiaProject() {
    return (
        <div id="teleaphasia">
            <Header />
            
            <ProjectsWriteUps projNumber="0" />

            <Footer />
        </div>
    );
};

export default TeleaphasiaProject;


{/* <div id="main" className="pt-5">
    <Header />

    <h1>Teleaphasia Project</h1>
    <img className="projectPicture" src={teleaphasiaImgURL} />
    <h3>Skills: PHP, Laravel, Python, Swift</h3>

    <h2>The Problem</h2>

    <p>For my capstone project of the 2nd major in Innovation & Design,
        I decided to work on a telerehab solution for Aphasia patients & speech therapists.
        Aphasia is a language disorder that impairs a patient's ability to communicate
        as they may struggle with comprehension, reading, writing and/or speaking.
        Thus, patients would seek treatment with a speech therapist.</p>

    <p>Speech therapists gather & prepare learning materials relevant to each patient
        that they will go over with the patient during face-to-face sessions.
        In addition, they may prescribe homework for the patient to practice at home.
        Unfortunately, the therapist is unable to monitor whether the patient is practicing
        consistently at home & unable to track their progress until they meet at the next session.
        This often results in slower learning progress & the therapist is required to spend more time
        going over previous lessons, in turn leading to burnout & frustration for both parties.</p>

    <h2>The Solution</h2>

    <p>My teammate & I, under the guidance of our professor, aimed to build an app through which
        speech therapists can prescribe their patients various language exercises
        as well as track when they are completed & how well they scored.
        Additionally, the speech therapist can log into a server which could help them create
        some practice materials automatically, reducing the time & effort needed for manual creation of such materials.</p>

    <p>I built a Python code to parse a list of verb-noun pairings.
        To generate a multiple choice question, the code may pick a verb & its appropriately matching noun,
        along with 3 other non-matching nouns.
        The patient's task would then be to answer such multiple choice questions to the best of their abilities.</p>

    <p>I learnt to code with PHP to build a functioning server that would
        take in several inputs such as how many multiple choice questions the speech therapist wishes to generate.
        The Python code would then be called & generate the list of questions for the therapist.</p>

    <p>Swift was also used to create the app interface which the patient would interact with to complete their assigned exercises.</p>
</div> */}