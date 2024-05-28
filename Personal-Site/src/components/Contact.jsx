import React from "react";

function Contact() {
    return (
        <section id="contactSection" className="my-4 mx-5 py-3">

            <h2 className="h1-responsive font-weight-bold text-center my-4">Contact me</h2>
            <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to drop me message!</p>

            <div className="row px-5">

                <div className="col-md-9 px-5">
                    <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                        <div className="row py-2">

                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <label htmlFor="name" className="">Your name</label>
                                    <input type="text" id="name" name="name" className="form-control" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <label htmlFor="email" className="">Your email</label>
                                    <input type="text" id="email" name="email" className="form-control" />
                                </div>
                            </div>

                        </div>

                        <div className="row py-2">
                            <div className="col-md-12">
                                <div className="md-form mb-0">
                                    <label htmlFor="subject" className="">Subject</label>
                                    <input type="text" id="subject" name="subject" className="form-control" />
                                </div>
                            </div>
                        </div>

                        <div className="row py-2">

                            <div className="col-md-12">

                                <div className="md-form">
                                    <label htmlFor="message">Your message</label>
                                    <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                </div>

                            </div>
                        </div>

                    </form>

                    <div className="text-center text-md-left py-3">
                        <a className="btn btn-secondary"
                        // onClick="document.getElementById('contact-form').submit();"
                        >Send</a>
                    </div>
                    <div className="status"></div>
                </div>

                <div className="col-md-3 text-center">
                    <ul className="list-unstyled mb-0">
                        <li className="pt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                            </svg>
                            <p>caitlinyhq@gmail.com</p>
                        </li>

                        <li className="pt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                            </svg>
                            <p>linkedin.com/in/caitlin-y-hq</p>
                        </li>
                    </ul>
                </div>

            </div>

        </section>
    );
};

export default Contact;