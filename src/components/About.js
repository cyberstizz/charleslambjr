import React from 'react';
import './About.css';


const About = () => {
return (
    <div className="aboutPage">
        <div id="aboutTopDecoration"></div>
        <div id='aboutSkewedDov'></div>
        <div id="aboutHeader">About</div>
        <div id="aboutParagraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. </div>
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

        </div>
        <div id="aboutFooter"></div>
    </div>
)
}

export default About;