import React from "react";
import ProjectSkillBubble from "./ProjectSkillBubble"

function ProjectIntro(props) {
    let projectInfo = props.projectInfo;

    return (
        <div className="flex-container colorContainer">
            <div className="flex-container1 projectIntro">
                <div className="flex-item projectTitle">
                    <h1>{projectInfo.projectTitle}</h1>
                </div>
                <div className="flex-item projectSkills">
                    <ProjectSkillBubble skills={projectInfo.skills}/>
                </div>
                <div className="flex-item sectionTitle">
                    <h2>{projectInfo.problemStatement}</h2>
                    <p>{projectInfo.problemParagraph1}</p>
                    <p>{projectInfo.problemParagraph2}</p>
                </div>
            </div>

            <div className="flex-container2 projectVideo">
                <div className="flex-item projectVid">
                    <h1>Vid</h1>
                </div>
            </div>
        </div>
    );
}

export default ProjectIntro;