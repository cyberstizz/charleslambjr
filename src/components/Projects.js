import React from 'react';
import '../App.css';
import './Projects.css';
import Card from './Card';

class Projects extends React.Component{
    

    render(){
return (
    <React.Fragment>
        <div id="projectsBackground">

    <div className="projectsNavDecoratio"></div>
        <div className="projectsTitle">Projects</div>
        <div className="projectsInfoDiv">These are a few projects I have completed recently</div>
        <div id="cardsDiv">
        <Card /> <Card /> <br/><br/>
        <Card /> <Card />

        </div>
        </div>
        </React.Fragment>
)
}
}

export default Projects;