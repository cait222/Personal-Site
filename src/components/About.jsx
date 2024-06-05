import React from "react";

function About() {
    return (
        <div className="about container col-xxl-8 px-4 py-3">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-3">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src="https://getbootstrap.com/docs/5.3/examples/heroes/bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"></img>
                </div>
                <div className="col-lg-6">
                    <h1 className="myName display-5 fw-bold text-body-emphasis lh-1 mb-3">Hi! I'm Caitlin.</h1>
                    <p className="lead">I found my love for coding in university & discovered an interest in UIUX design along the way.
                        <br/ >
                        Excited by the idea of combining these two skill sets, I have ventured into web development & wish to create beautiful(ly) efficient products for you!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;