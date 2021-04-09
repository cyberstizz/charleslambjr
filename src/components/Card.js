import React from 'react';
import './Card.css';


const Card = (props) => {
    return (
        <React.Fragment>
            <div id='cardTop'></div>
        <div id="entireCardBody">
        <div id="cardTitle">{props.title}</div>
        </div>
        </React.Fragment>
    )
};

export default Card;