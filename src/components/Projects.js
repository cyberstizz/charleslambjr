import React from 'react';
import '../App.css';
import './Projects.css';
import Card from './Card';

class Projects extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            cardOneTitle: 'Squint',
            cardTwoTitle: 'KnowIt',
            cardThreeTitle: 'Quickshow',
            cardFourTitle: 'random',
            cardOneDescription: 'A goal application allowing users to sign up, enter their goals and aspirations and track them daily',
            cardTwoDescription: 'A flashcard application based on the popular scientific study of spaced repetiton',
            cardThreeDescription: 'An application using the shows Api that allows users to find out information about their favorite shows and when they first aired quickly',
            cardFourDescription: 'random'
        }
    }

    render(){
return (
    <React.Fragment>
        <div id="projectsBackground">

    <div className="projectsNavDecoratio"></div>
        <div className="projectsTitle">Projects</div>
        <div className="projectsInfoDiv">These are a few projects I have completed recently</div>
        <div id="cardsDiv">
        <Card title={this.state.cardOneTitle} description={this.state.cardOneDescription}/> <Card /> <br/><br/>
        <Card /> <Card />

        </div>
        </div>
        <div id='infoAboutProjectsSection'></div>
        </React.Fragment>
)
}
}

export default Projects;