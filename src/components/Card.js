import React from 'react';
import './Card.css';


const Card = (props) => {
    return (
        <div id='wholeCard'>
        <div id='cardTop' style={{backgroundColor: props.backgroundColor, width: '22vw', marginRight: '.5vw'}}><br />  {props.title} <br /> <a href={props.link}><button style={{backgroundColor: props.buttonColor,'font-family': 'Permanent Marker, cursive',
color: props.backgroundColor}}>Website</button></a><a href={props.github}><button style={{backgroundColor: props.buttonColor,
color: props.backgroundColor}}>Code</button></a></div>
        <div id="cardBody" style={{backgroundImage: props.backgroundImage, height: '40vh', marginRight: '.5vw', width: '22.25vw', textAlign: 'center', position: 'relative', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></div>
       <div id="cardFooter" style={{color: 'white', border: 'solid black 2px', position: 'relative', textAlign: 'center', marginRight: '.5vw', height: '9vh', width: '22vw', backgroundColor: props.backgroundColor}}>{props.footerText}</div>
        </div>
        // </div>
    )
};

export default Card;