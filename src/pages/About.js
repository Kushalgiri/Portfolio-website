import React from "react";
import image from "../image/about.png"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowAltCircleDown} from "@fortawesome/free-solid-svg-icons";
import resume from "../assets/Resume/KushalCV.pdf";
import Skills from "./Skills";

const About = () => {
    return (
        <div className="about-wrapper" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 about-img">
                        <img src={image} alt="about"/>
                    </div>
                    <div className="col-md-7 pr-4 about-des">
                        <h2>About Me</h2>
                        <hr></hr>
                        <p style={{fontSize:"19px"}}>I'm a Front End Developer and a UI Designer from Kathmandu,Nepal.</p>
                        <p style={{marginBottom: "49px"}}>I enjoy developing and make things look more appealing to
                            visual.
                            I like solving the complexity of problem by giving them a beautiful and simple interface
                            design.
                            I also love the structure of coding and eager to explore more.</p>

                        <a href={resume} download className="button">
                            <span className="btn-txt">Download CV</span>
                            <span className="btn-icon"><FontAwesomeIcon
                                icon={faArrowAltCircleDown}/></span>
                        </a>
                    </div>

                </div>
            </div>
            <Skills/>


        </div>
    );
};

export default About;