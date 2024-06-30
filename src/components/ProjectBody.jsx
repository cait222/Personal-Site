import React from "react";

function ProjectBody(props) {
  let projectInfo = props.projectInfo;

  return (
    <div className="flex-container colorContainer">
      <div className="flex-container1 projectBodySection">
        <h2>{projectInfo.solutionStatement}</h2>
        <p>{projectInfo.solutionParagraph1}</p>
        <p>{projectInfo.solutionParagraph2}</p>
        <p>{projectInfo.solutionParagraph3}</p>
        <p>{projectInfo.solutionParagraph4}</p>
      </div>
    </div>
  );
}

export default ProjectBody;