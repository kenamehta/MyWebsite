import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";


class NavBar extends Component {
    state = {}
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
            <div id="Navbar">
                <nav className="navbar-style navbar navbar-expand-lg navbar-light bg-dark static-top fixed-top">
                    <img
                        src="logo.png"
                        className="nav-logo"
                        alt="Logo"
                        onClick={this.scrollToTop}
                    />
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item ml-2 mr-4">
                                <Link
                                    activeClassName="active"
                                    to="skill_section"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={1000}
                                >
                                    <div className="nav-link">Skills</div>
                                </Link>
                            </li>
                            <li className="nav-item ml-2 mr-4">
                                <Link
                                    activeClassName="active"
                                    to="project_section"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={1000}
                                >
                                    <div className="nav-link">Projects</div>
                                </Link>
                            </li>
                            <li className="nav-item ml-2 mr-4">
                                <Link
                                    activeClassName="active"
                                    to="aboutme_section"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={1000}
                                >
                                    <div className="nav-link">About</div>
                                </Link>
                            </li>
                            <li className="nav-item ml-2 mr-4">
                                <Link
                                    activeClassName="active"
                                    to="contact_section"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={1000}
                                >
                                    <div className="nav-link">Contact</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;