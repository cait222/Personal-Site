import React from "react";
import SkillBubble from "./SkillBubble"
import HTMLImgURL from "../images/HTML_logo.png";
import CSSImgURL from "../images/CSS.png";
import JSImgURL from "../images/Javascript.png"
import BootstrapImgURL from "../images/Bootstrap_logo.png";
import ReactImgURL from "../images/React_logo.png";
import PostGRESImgURL from "../images/PostGres_logo.png";
import MongoDBImgURL from "../images/MongoDB_logo.png";

let skillsList = [
    {id: 1, imageURL: HTMLImgURL, name: "HTML"},
    {id: 2, imageURL: CSSImgURL, name: "CSS"},
    {id: 3, imageURL: JSImgURL, name: "JavaScript"},
    {id: 4, imageURL: BootstrapImgURL, name: "Bootstrap"},
    {id: 5, imageURL: ReactImgURL, name: "React"},
    {id: 6, imageURL: PostGRESImgURL, name: "PostGreSQL"},
    {id: 7, imageURL: MongoDBImgURL, name: "MongoDB"}
];

function Skills() {
    return (
        <div className="skills row py-4">
            <div className="d-flex p-3 justify-content-center">
                <h1>Skills</h1>
            </div>
            <SkillBubble skills={skillsList} />
        </div>

    );
};

export default Skills;