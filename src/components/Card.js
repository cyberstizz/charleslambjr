import React from 'react';
import './Card.css';


const Card = (props) => {
    return (
        <div id='wholeCard'>
        <div id='cardTop' style={{backgroundColor: props.backgroundColor, width: '22vw', marginRight: '.5vw'}}><br />  {props.title} <br /> <a href={props.link}><button style={{backgroundColor: props.buttonColor, 'font-size': '18px', 'font-family': 'Permanent Marker, cursive',
width: '7vw', height: '5vh', marginRight: '2vw', color: props.backgroundColor}}>Preview</button></a><a href={props.github}><button style={{backgroundColor: props.buttonColor, 'font-size': '18px', 'font-family': 'Permanent Marker, cursive',
width: '7vw', height: '5vh', marginRight: '.5vw', color: props.backgroundColor}}>Github</button></a></div>
        <div id="cardBody" style={{backgroundImage: props.backgroundImage, height: '40vh', marginRight: '.5vw', width: '22.3vw', textAlign: 'center', position: 'relative', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></div>
       <div id="cardFooter" style={{color: 'white', border: 'solid black 2px', position: 'relative', textAlign: 'center', marginRight: '.5vw', height: '9vh', width: '22vw', backgroundColor: props.backgroundColor}}>{props.footerText}</div>
        </div>
        // </div>
    )
};

export default Card;