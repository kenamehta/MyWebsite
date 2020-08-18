import React, { Component } from 'react';
import logo from "./images/KM.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import { Navbar, Nav } from "react-bootstrap";


class NavBar extends Component {
    state = {}
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
            <div>
            <Navbar fixed="top" className="navbar-style" collapseOnSelect expand="sm" bg="light" variant="light">
                <Navbar.Brand>

                    <img
                        src={logo}
                        className="nav-logo"
                        alt="Logo"
                        onClick={this.scrollToTop}
                    />
                </Navbar.Brand>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link className="mr-2 ">
                            <Link
                                activeClass="active"
                                to="skill_section"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Skills
                        </Link>
                        </Nav.Link>
                        <Nav.Link className="mr-2 ">
                            <Link
                                activeClass="active"
                                to="project_section"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Projects
                        </Link>
                        </Nav.Link>
                        <Nav.Link className="mr-2">
                            <Link
                                activeClass="active"
                                to="section1"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                About me
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link
                                activeClass="active"
                                to="section1"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Contact
                            </Link>
                        </Nav.Link>
                    </Nav>
                </div>
            </Navbar>
            </div>

        );
    }
}

export default NavBar;