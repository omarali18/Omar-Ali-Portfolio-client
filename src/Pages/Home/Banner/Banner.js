import React from 'react';
import banner from "../../../Images/banner.jpg"
import "./Banner.css"

const Banner = () => {
    return (
        <div className="banner-container" id="home">
            <div class="row">
                <div class="col-12 col-md-6">
                    <div className="d-flex flex-column  align-items-center banner-detail">
                        <h1>I'm Omar Ali</h1>
                        <h2>Full Stack Web Developer</h2>
                        <a href="https://drive.google.com/file/d/18ucOHrsrx-eWiqWq6fcDdlMNLNN9rNMR/view?usp=sharing" target="blank"><button className="banner-resume">Download Resume</button></a>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <img src={banner} className="img-fluid" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;