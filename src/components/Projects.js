// importing React the card component and the cards pics as variables for easy use

import React from 'react';
import '../App.css';
import './Projects.css';
import Card from './Card';
import basicBankImage from '../basicBankShot.png';
import wizardVsWitchBackground from "../WizardvsWitchScreenshot.png";
import guttiesShot from "../guttiesScreenshot.png";
import mogulFashionShot from "../mogulFashionShot.png";


//Projects component is initiated as a class compnent, kept this way for nostalgia

class Projects extends React.Component{
    constructor(props){
        super(props);
        // inside the constructor creating variables for easy reference later

        const guttiesLink = 'https://gutties-outlet-58ebc01c68c7.herokuapp.com/';    
        const squintLink = 'https://squint.netlify.app';
        const thirdLink = 'https://quickshow.netlify.app';
        const fourthLink = 'https://wizardvswitch.netlify.app';
        const guttiesGithubLink = 'https://github.com/cyberstizz/theGuttiesOutlet';
        const squintGithubLink = 'https://github.com/cyberstizz/Squint';
        const thirdGithubLink = 'https://github.com/cyberstizz/Show-Api';
        const fourthGithubLink = 'https://github.com/cyberstizz/theGame';
        const basicBankLink = 'https://basic-bank-49327162c5c5.herokuapp.com/';
        const mogulFashionLink = 'https://mogulfashion-65ec42dc2783.herokuapp.com/';


        //creating state to hold colors and background images

        this.state ={
            cardOneTitle: 'Basic Bank',
            cardOneBackgroundImage: `url(${basicBankImage})`,
            cardOneButtonColor: 'rgb(0, 34, 102)',
            cardOneTopColor: 'rgb(249, 140, 31)',
            cardOneTopTextColor: 'rgb(0, 34, 102)',
            cardOneLink: basicBankLink,
            cardOneGithub: guttiesGithubLink,
            cardOneFooterText: 'Authentication | Postgresql | E-commerce',
            cardOneFooterTextColor: 'rgb(0, 34, 102)',
            cardTwoTitle: 'Gutties Outlet',
            cardTwoBackgroundImage: `url(${guttiesShot})`,
            cardTwoButtonColor: 'rgb(249, 140, 31)',
            cardTwoTopColor: 'rgb(0, 34, 102)',
            cardTwoTopTextColor: 'rgb(249, 140, 31)',
            cardTwoLink: guttiesLink,
            cardTwoGithub: guttiesGithubLink,
            cardTwoFooterText: 'full CRUD',
            cardTwoFooterTextColor: 'rgb(249, 140, 31)',
            cardThreeTitle: 'Mogul Fashions',
            cardThreeBackgroundImage: `url(${mogulFashionShot})`,
            cardThreeButtonColor: 'rgb(0, 34, 102)',
            cardThreeTopColor: 'rgb(249, 140, 31)',
            cardThreeLink: mogulFashionLink,
            cardThreeGithub: thirdGithubLink,
            cardThreeFooterText: 'Consuming an Api with React',
            cardFourTitle: 'Wizard vs Witch',
            cardFourBackgroundImage: `url(${wizardVsWitchBackground})`,
            cardFourButtonColor: 'rgb(249, 140, 31)',
            cardFourTopColor: 'rgb(0, 34, 102)',
            cardFourLink: fourthLink,
            cardFourGithub: fourthGithubLink,
            cardFourFooterText: 'Javascript game | vanilla js',
            cardOneDescription: 'A Bank application allowing users to sign up, create and manage accounts. mixing Python/Django with React',
            cardTwoDescription: 'An ecommerce sneaker store using postgresql and passport js for a Pern stack',
            cardThreeDescription: 'A Mobile first fashion showcase web applicaation using a mongodb remote cluster and the Mern stack',
            cardFourDescription: 'Wizard vs Witch a javascript video game I created years ago for fun'
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
        <Card topTextColor={this.state.cardOneTopTextColor} footerTextColor={this.state.cardOneFooterTextColor} title={this.state.cardOneTitle} footerText={this.state.cardOneFooterText}  github={this.state.cardOneGithub} link={this.state.cardOneLink} backgroundImage={this.state.cardOneBackgroundImage} buttonColor={this.state.cardOneButtonColor} backgroundColor={this.state.cardOneTopColor} description={this.state.cardOneDescription} /> <Card topTextColor={this.state.cardTwoTopTextColor} footerTextColor={this.state.cardTwoFooterTextColor} title={this.state.cardTwoTitle} footerText={this.state.cardTwoFooterText} link={this.state.cardTwoLink} github={this.state.cardTwoGithub} buttonColor={this.state.cardTwoButtonColor} backgroundImage={this.state.cardTwoBackgroundImage} description={this.state.cardTwoDescription} backgroundColor={this.state.cardTwoTopColor} /> <br/><br/><n/>
        <Card topTextColor={this.state.cardOneTopTextColor} footerTextColor={this.state.cardOneFooterTextColor} title={this.state.cardThreeTitle} footerText={this.state.cardThreeFooterText} github={this.state.cardThreeGithub} link={this.state.cardThreeLink} backgroundImage={this.state.cardThreeBackgroundImage} buttonColor={this.state.cardThreeButtonColor} description={this.state.cardThreeDescription} backgroundColor={this.state.cardThreeTopColor} /> <Card topTextColor={this.state.cardTwoTopTextColor} footerTextColor={this.state.cardTwoFooterTextColor} title={this.state.cardFourTitle} footerText={this.state.cardFourFooterText} link={this.state.cardFourLink} github={this.state.cardFourGithub} description={this.state.cardFourDescription} backgroundImage={this.state.cardFourBackgroundImage} buttonColor={this.state.cardFourButtonColor} backgroundColor={this.state.cardFourTopColor} />

        </div>
        </div>
        </React.Fragment>
)
}
}

export default Projects;