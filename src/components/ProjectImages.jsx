import React from "react";

function ProjectImages(props) {
  let projectInfo = props.projectInfo;
  let projectImageURLs = projectInfo.imageGallery;

  let images = projectImageURLs.map((img) => (
    <div key={img.id}>
      <img className="projectImage" src={img.imageURL} />
    </div>
  ));
  
  return (
    <div className="flex-container projectImageGallery">
      {images}
    </div>
  );
}

export default ProjectImages;