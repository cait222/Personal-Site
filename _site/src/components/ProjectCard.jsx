import React from "react";

function ProjectCard(props) {
    let projects = props.projects;
    let projectsList = projects.map(project =>
        <div key={project.id} className="projectCard">
            <div className="col">
                <div className="card shadow-sm">
                    {/* <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns={project.cardImage} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
                    <img className="projectPicture" src={project.cardImage} />
                    <div className="card-body">
                        <h3 className="card-title">{project.cardTitle}</h3>
                        <p className="card-text">{project.cardText}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <a type="button" className="btn btn-sm btn-outline-secondary" href={project.siteLink} target="_blank" rel="noopener noreferrer">Visit site</a>
                                <a type="button" className="btn btn-sm btn-outline-secondary" href={project.codeLink} target="_blank" rel="noopener noreferrer">View code</a>
                            </div>
                            {/* <small className="text-body-secondary">9 mins</small> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    return (projectsList);
};

export default ProjectCard;