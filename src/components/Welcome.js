import React, { Component } from 'react';
import Particles from 'react-particles-js';
import particles from "./particles"
import { Link } from "react-scroll";


class Welcome extends Component {
    state = { bool: false };
    render() {

        return (
            <div id="welcome_section" className="welcome_background">
                <Particles
                    style={{ position: "absolute" }}
                    params={particles} />
                <div className="main_enclose">
                    <div className="header__text-box">
                        <div className="heading-primary ml-2">
                            <div className="heading-primary--main">Hi, I'm <span className="name-text">Kena Mehta</span>. <br /> I am a Full-Stack Developer!</div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <Link
                        activeClass="active"
                        to="skill_section"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <span
                            className="project-button"
                            onMouseOver={() => this.setState({ bool: true })}
                            onMouseOut={() => this.setState({ bool: false })}
                            style={{ transform: `${this.state.bool ? 'scale(1.2,1.2)' : 'scale(1,1)'}` }}>
                            <span>

                                View my work


                        </span>
                            <span className="ml-3">
                                {this.state.bool ?
                                    (<img alt="arrow down" src="https://img.icons8.com/officexs/48/000000/circled-chevron-down.png" />) :
                                    (<img alt="arrow right" src="https://img.icons8.com/officexs/48/000000/circled-chevron-right.png" />)
                                }

                            </span>
                        </span>
                    </Link>
                </div>
                <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
                    <a
                        href="https://www.linkedin.com/in/kenamehta/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img className="fixed_linkedin e_style" height="40px" src="linkedin.svg" alt="LinkedIn"></img>
                    </a>
                </div>
                <div style={{ position: "fixed", bottom: "70px", right: "20px" }}>
                    <a
                        href="https://github.com/kenamehta/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img className="fixed_linkedin e_style" height="40px" src="github.svg" alt="Github"></img>
                    </a>
                </div>
            </div>
        );
    }
}

export default Welcome;