import React from 'react';
import {FaFacebook} from "react-icons/fa";
import {RiInstagramLine} from "react-icons/ri";
import {AiFillLinkedin} from "react-icons/ai";
import {SiGithub} from "react-icons/si"

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="container">
                <h5>Contact Me</h5>
                <hr></hr>
                <div className="row ">
                    <div className="col-md-7" style={{padding: "43px 70px 53px 36px"}}>
                        <p>Hey there !</p>
                        <p>I would be more than happy to be part of your dream project</p>
                        <p>If you have any query your can send me an email or catch me on following</p>
                    </div>
                    <div className="col-md-5 form-wrapper">
                        <form className="p-4 f-cont-wrap">
                            <div className="form-group">
                                <input type="text" placeholder="Enter your name" className="form-control" required/>
                            </div>
                            <div>
                                <input type="email" placeholder="Email" className="form-control" required/>
                            </div>
                            <div>
                                <textarea placeholder="Message" rows="3" className="form-control txt-area" required/>
                            </div>
                            <button type="submit" className="btn-style send-btn">Send</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="contact-me">
                <div className="container">
                    <div className="row contact-info-sec pt-5 pb-5">
                        <div className="col-md-12 contact-info  ">
                            <ul>
                                <li>
                                    <p>9868098407</p>
                                </li>
                                <li>
                                    <a href="http://www.gmail.com" alt="" className="gmail-style">kush.gir.457@gmail.com</a>
                                </li>
                                <li>
                                    <p>
                                        Kathmandu,Nepal
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-12 contact-icons pt-2">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/kush.giri.37"> <FaFacebook/></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/kush_giri/"> <RiInstagramLine/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/feed/"> <AiFillLinkedin/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/Kushalgiri"> <SiGithub/>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;