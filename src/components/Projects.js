import React from 'react';
import '../App.css';
import './Projects.css'

const Projects = () =>{
return (
    <React.Fragment>
    <div className="projectsBackground"></div>
        <div className="projectsTitle">Projects</div>
        <div className="projectsInfoDiv">These are a few projects I have done recently</div>
        <div id="cardsDiv"></div>
        </React.Fragment>
)
}

export default Projects;