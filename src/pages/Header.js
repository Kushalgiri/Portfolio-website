import React from "react";
import {Link} from "react-scroll";
import picture from "../image/img2.png";
import Typed from "react-typed";
import ParticleCustomize from "../components/particle/ParticleCustomize";

const Header = () => {
    return (
        <div className="header-wrapper" id="main">
            <div className="container">
                <div className="row">
                    <ParticleCustomize/>
                    <div className="col-md-8">
                        <div className="main-info">
                            <h3>Hello</h3>
                            <h1>
                                I'm
                                <span> Kushal Giri</span>
                            </h1>
                            <p>A Front End developer located at kathmandu Nepal,</p>
                            <p> looking forward to work around the world. I am a:</p>
                            <Typed
                                className="typed-style"
                                strings={["Web Designer", "FrontEnd Developer", "UI UX Designer"]}
                                typeSpeed={40}
                                backSpeed={60}
                                loop
                            />
                            <Link to="contact" className="btn-style">Contact me</Link>
                        </div>
                    </div>
                    {/*col 8 ends*/}
                    <div className="col-md-4">
                        <img src={picture} alt="" className="profile-img"/>
                    </div>
                    {/*col 4 ends*/}
                </div>
                {/*row ends*/}
            </div>
        </div>
    );
};

export default Header;