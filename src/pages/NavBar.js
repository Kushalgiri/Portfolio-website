import React from "react";
import {Link} from "react-scroll"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">KUSHAL GIRI</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color: "dark"}}/>
                </button>
                <div className="collapse navbar-collapse justify-content-center " id="navbarNav">

                    <ul className="navbar-nav ">
                        {/*<Link href="#about">*/}
                        <li className="nav-item active">
                            {/*<a className="nav-link " href="/">Home</a>*/}
                            <Link to="main">Home</Link>
                        </li>

                        {/*</Link>*/}
                        <li className="nav-item">
                            {/*<a className="nav-link" href="/">About me</a>*/}
                            <Link to="about">About Me</Link>
                        </li>
                        <li className="nav-item">
                            {/*<a className="nav-link" href="#">Skill</a>*/}
                            <Link to="portfolio">Portfolio</Link>
                        </li>

                        <li className="nav-item">
                            {/*<a className="nav-link" href="#">Portfolio</a>*/}
                            <Link to="contact">Contact Me</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default NavBar;