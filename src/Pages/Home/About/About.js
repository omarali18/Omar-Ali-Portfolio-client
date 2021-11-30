import React from 'react';
import aboutBg from "../../../Images/aboutBg.png"
import "./About.css"

const About = () => {
    return (
        <div className="about" id="about">
            <div className="about-container" id="home">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img src={aboutBg} className="img-fluid me-5" alt="" />
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="d-flex flex-column about-detail">
                            <h1>About Me.</h1>
                            <p>I have experience working with HTML, CSS as well as javascript and
                                react js and nodejs. I have done a few projects with all these languages.
                                Some of these projects have backend work with nodejs and mongoDB.
                                As a beginner I was given some good projects myself.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;