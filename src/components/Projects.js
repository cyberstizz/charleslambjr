import React from 'react';
import '../App.css';
import './Projects.css';
import Card from './Card';

class Projects extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            cardOneTitle: 'Squint',
            cardOneButtonColor: 'rgb(0, 34, 102)',
            cardOneTopColor: 'rgb(249, 140, 31)',
            cardTwoTitle: 'KnowIt',
            cardTwoButtonColor: 'rgb(249, 140, 31)',
            cardTwoTopColor: 'rgb(0, 34, 102)',
            cardThreeTitle: 'Quickshow',
            cardThreeButtonColor: 'rgb(0, 34, 102)',
            cardThreeTopColor: 'rgb(249, 140, 31)',
            cardFourTitle: 'Wizard vs Witch',
            cardFourButtonColor: 'rgb(249, 140, 31)',
            cardFourTopColor: 'rgb(0, 34, 102)',
            cardOneDescription: 'A goal application allowing users to sign up, enter their goals and aspirations and track them daily',
            cardTwoDescription: 'A flashcard application based on the popular scientific study of spaced repetiton',
            cardThreeDescription: 'An application using the shows Api that allows users to find out information about their favorite shows and when they first aired quickly',
            cardFourDescription: 'Wizard vs Witch'
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
        <Card title={this.state.cardOneTitle} buttonColor={this.state.cardOneButtonColor} backgroundColor={this.state.cardOneTopColor} description={this.state.cardOneDescription} /> <Card title={this.state.cardTwoTitle} buttonColor={this.state.cardTwoButtonColor} description={this.state.cardTwoDescription} backgroundColor={this.state.cardTwoTopColor} /> <br/><br/><n/>
        <Card title={this.state.cardThreeTitle} buttonColor={this.state.cardThreeButtonColor} description={this.state.cardThreeDescription} backgroundColor={this.state.cardThreeTopColor} /> <Card title={this.state.cardFourTitle} description={this.state.cardFourDescription} buttonColor={this.state.cardFourButtonColor} backgroundColor={this.state.cardFourTopColor} />

        </div>
        </div>
        <div id='infoAboutProjectsSection'></div>
        </React.Fragment>
)
}
}

export default Projects;