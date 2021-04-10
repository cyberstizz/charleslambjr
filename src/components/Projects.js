import React from 'react';
import '../App.css';
import './Projects.css';
import Card from './Card';
import background from "../squintScreenshot.png";
import quickShowBackground from "../quickShowScreenshot.png";
import knowitBackground from "../knowitscreenshot.png";
import wizardVsWitchBackground from "../WizardvsWitchScreenshot.png";

class Projects extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            cardOneTitle: 'Squint',
            cardOneBackgroundImage: `url(${background})`,
            cardOneButtonColor: 'rgb(0, 34, 102)',
            cardOneTopColor: 'rgb(249, 140, 31)',
            cardTwoTitle: 'KnowIt',
            cardTwoBackgroundImage: `url(${quickShowBackground})`,
            cardTwoButtonColor: 'rgb(249, 140, 31)',
            cardTwoTopColor: 'rgb(0, 34, 102)',
            cardThreeTitle: 'Quickshow',
            cardThreeBackgroundImage: `url(${wizardVsWitchBackground})`,
            cardThreeButtonColor: 'rgb(0, 34, 102)',
            cardThreeTopColor: 'rgb(249, 140, 31)',
            cardFourTitle: 'Wizard vs Witch',
            cardFourBackgroundImage: `url(${knowitBackground})`,
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
        <Card title={this.state.cardOneTitle}  backgroundImage={this.state.cardOneBackgroundImage} buttonColor={this.state.cardOneButtonColor} backgroundColor={this.state.cardOneTopColor} description={this.state.cardOneDescription} /> <Card title={this.state.cardTwoTitle} buttonColor={this.state.cardTwoButtonColor} backgroundImage={this.state.cardFourBackgroundImage} description={this.state.cardTwoDescription} backgroundColor={this.state.cardTwoTopColor} /> <br/><br/><n/>
        <Card title={this.state.cardThreeTitle} backgroundImage={this.state.cardTwoBackgroundImage} buttonColor={this.state.cardThreeButtonColor} description={this.state.cardThreeDescription} backgroundColor={this.state.cardThreeTopColor} /> <Card title={this.state.cardFourTitle} description={this.state.cardFourDescription} backgroundImage={this.state.cardThreeBackgroundImage} buttonColor={this.state.cardFourButtonColor} backgroundColor={this.state.cardFourTopColor} />

        </div>
        </div>
        <div id='infoAboutProjectsSection'></div>
        </React.Fragment>
)
}
}

export default Projects;