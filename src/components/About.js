import React from 'react';
import './About.css';


const About = () => {
return (
    <div className="aboutPage">
        <div id="aboutTopDecoration"></div>
        <div id='aboutSkewedDov'></div>
        <div id="aboutHeader">About</div>
        <div id="aboutParagraph">Hi my name is Charles Lamb jr! I am a web developer and bootcamp graduate from Nyc now living in Atlanta Georgia.
         I have been practicing web development for 5 years but started to pursue a career 2 years ago.
          My goal is to be a member of a cutting edge team in our incredible industry. Whether it be desktop, mobile or front end I am addicted to growing and learning how to help people have a better experience on their devices.
           Javascript is the love of my life and I just love when she arrives wearing React, however I am open to seeing her in different styles.
            After a fairly lengthy career in the meretricious industry of high retail tech and real estate sales I have finally decided to switch careers and dedicate all of my energy and time into my true love...
             If you are looking for a calculated dedicated and coachable jr dev that is willing to work tirelessly to become better daily I am the man for you. </div>
        <div id="skillsSection">
        <div id="skillsTitle">Skills =></div>
        <br />
        <div className="skillsColumnOne">
            
            <div id="htmlIcon"></div>
            <div id="cssIcon"></div>
            <div id="javascriptIcon"></div>
            <div id="reactIcon"></div>
            <div id="nodeIcon"></div>
            <div id="expressIcon"></div>
            <div id="sqliteIcon"></div>
            <div id="postgresIcon"></div>

        </div>
        <div className="skillsColumnTwo"></div>
            <div id="sassIcon"></div>
            <div id="bootstrapIcon"></div>
            <div id="jqueryIcon"></div>
            <div id="wordpressIcon"></div>
            <div id="gitIcon"></div>
            <div id="reduxIcon"></div>
            <div id="typescriptIcon"></div>
            <div id="reactNativeIcon"></div>
        </div>
        <div id="aboutFooter">

            <div id="footerSlogan">I have been practicing web development for 5 years!</div>
            <div id="footerDescription"> My goal is to be a member of a cutting edge team in our<br /> incredible industry. Whether it be desktop, mobile or front end I am addicted to growing and learning how to help people have a better experience</div>
            <div id="emailButton"></div>

        </div>
    </div>
)
}

export default About;