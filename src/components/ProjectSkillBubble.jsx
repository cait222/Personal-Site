import React from "react";

function ProjectSkillBubble(props) {
  let skills = props.skills;
  let skillsList = skills.map((skill) => (
    <div key={skill.id}>
      <img className="projectSkillPicture" src={skill.imageURL} />
    </div>
  ));
  return skillsList;
}

export default ProjectSkillBubble;