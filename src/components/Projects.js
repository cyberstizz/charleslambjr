// importing React the card component and the cards pics as variables for easy use

import React from 'react';
import '../App.css';
import './Projects.css';
import Card from './Card';
import squintBackground from "../squintScreenshot.png";
import quickShowBackground from "../quickShowScreenshot.png";
import wizardVsWitchBackground from "../WizardvsWitchScreenshot.png";
import gutties from "../guttiesScreenshot.png";

//Projects component is initiated as a class compnent, kept this way for nostalgia

class Projects extends React.Component{
    constructor(props){
        super(props);
        // inside the constructor creating variables for easy reference later

        const guttiesLink = 'https://guttiesportfolioversion.herokuapp.com';    
        const squintLink = 'https://squint.netlify.app';
        const thirdLink = 'https://quickshow.netlify.app';
        const fourthLink = 'https://wizardvswitch.netlify.app';
        const guttiesGithubLink = 'https://github.com/cyberstizz/theGuttiesOutlet';
        const squintGithubLink = 'https://github.com/cyberstizz/Squint';
        const thirdGithubLink = 'https://github.com/cyberstizz/Show-Api';
        const fourthGithubLink = 'https://github.com/cyberstizz/theGame';

        //creating state to hold colors and background images

        this.state ={
            cardOneTitle: 'Gutties Outlet',
            cardOneBackgroundImage: `url(${gutties})`,
            cardOneButtonColor: 'rgb(0, 34, 102)',
            cardOneTopColor: 'rgb(249, 140, 31)',
            cardOneLink: guttiesLink,
            cardOneGithub: guttiesGithubLink,
            cardOneFooterText: 'Authentication | Postgresql | E-commerce',
            cardTwoTitle: 'Squint',
            cardTwoBackgroundImage: `url(${squintBackground})`,
            cardTwoButtonColor: 'rgb(249, 140, 31)',
            cardTwoTopColor: 'rgb(0, 34, 102)',
            cardTwoLink: squintLink,
            cardTwoGithub: squintGithubLink,
            cardTwoFooterText: 'full CRUD',
            cardThreeTitle: 'Quickshow',
            cardThreeBackgroundImage: `url(${quickShowBackground})`,
            cardThreeButtonColor: 'rgb(0, 34, 102)',
            cardThreeTopColor: 'rgb(249, 140, 31)',
            cardThreeLink: thirdLink,
            cardThreeGithub: thirdGithubLink,
            cardThreeFooterText: 'Consuming an Api with React',
            cardFourTitle: 'Wizard vs Witch',
            cardFourBackgroundImage: `url(${wizardVsWitchBackground})`,
            cardFourButtonColor: 'rgb(249, 140, 31)',
            cardFourTopColor: 'rgb(0, 34, 102)',
            cardFourLink: fourthLink,
            cardFourGithub: fourthGithubLink,
            cardFourFooterText: 'Javascript game | vanilla js',
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

{/* title and headline divs followed by four Card components in succession */}

    <div className="projectsNavDecoratio"></div>
        <div className="projectsTitle">Projects</div>
        <div className="projectsInfoDiv">These are a few projects I have completed recently</div>
        <div id="cardsDiv">
        <Card title={this.state.cardOneTitle} footerText={this.state.cardOneFooterText}  github={this.state.cardOneGithub} link={this.state.cardOneLink} backgroundImage={this.state.cardOneBackgroundImage} buttonColor={this.state.cardOneButtonColor} backgroundColor={this.state.cardOneTopColor} description={this.state.cardOneDescription} /> <Card title={this.state.cardTwoTitle} footerText={this.state.cardTwoFooterText} link={this.state.cardTwoLink} github={this.state.cardTwoGithub} buttonColor={this.state.cardTwoButtonColor} backgroundImage={this.state.cardTwoBackgroundImage} description={this.state.cardTwoDescription} backgroundColor={this.state.cardTwoTopColor} /> <br/><br/><n/>
        <Card title={this.state.cardThreeTitle} footerText={this.state.cardThreeFooterText} github={this.state.cardThreeGithub} link={this.state.cardThreeLink} backgroundImage={this.state.cardThreeBackgroundImage} buttonColor={this.state.cardThreeButtonColor} description={this.state.cardThreeDescription} backgroundColor={this.state.cardThreeTopColor} /> <Card title={this.state.cardFourTitle} footerText={this.state.cardFourFooterText} link={this.state.cardFourLink} github={this.state.cardFourGithub} description={this.state.cardFourDescription} backgroundImage={this.state.cardFourBackgroundImage} buttonColor={this.state.cardFourButtonColor} backgroundColor={this.state.cardFourTopColor} />

        </div>
        </div>
        </React.Fragment>
)
}
}

export default Projects;