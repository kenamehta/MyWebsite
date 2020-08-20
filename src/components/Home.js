import React, { Component } from 'react';
import Welcome from './Welcome'
import Skill from './tabs/Skill'
import Project from './tabs/Project'
import About from './tabs/About'
import Contact from './tabs/Contact'
import NavBar from './NavBar'

class Home extends Component {
    state = {}
    render() {
        return (
            <div className="main-div">
                <NavBar />
                <div className="data-div">
                    <Welcome id="welcome_section" />
                    <Skill id="skill_section" />
                    <Project id="project_section" />
                    <About id="aboutme_section" />
                    <Contact />
                </div>
            </div>);
    }
}

export default Home;