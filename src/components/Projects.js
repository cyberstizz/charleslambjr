import React from 'react';
import '../App.css';
import './Projects.css';
import Card from './Card';

class Projects extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            cardOneTitle: 'Squint',
            cardOneTopColor: 'rgb(249, 140, 31)',
            cardTwoTitle: 'KnowIt',
            cardTwoTopColor: 'rgb(0, 34, 102)',
            cardThreeTitle: 'Quickshow',
            cardThreeTopColor: 'rgb(249, 140, 31)',
            cardFourTitle: 'random',
            cardFourTopColor: 'rgb(134, 193, 212)',
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
        <Card title={this.state.cardOneTitle} backgroundColor={this.state.cardOneTopColor} description={this.state.cardOneDescription} /> <Card title={this.state.cardTwoTitle} description={this.state.cardTwoDescription} backgroundColor={this.state.cardTwoTopColor} /> <br/><br/><n/>
        <Card title={this.state.cardThreeTitle} description={this.state.cardThreeDescription} backgroundColor={this.state.cardThreeTopColor} /> <Card title={this.state.cardFourTitle} description={this.state.cardFourDescription} backgroundColor={this.state.cardFourTopColor} />

        </div>
        </div>
        <div id='infoAboutProjectsSection'></div>
        </React.Fragment>
)
}
}

export default Projects;