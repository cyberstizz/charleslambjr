import React from 'react';
import './SampleCard.css';


const SampleCard = (cardData) => (
  <div className="cardOutline">
    <header className='projectTechnologiesOutline'></header>
    <img className='cardImg' src={cardData.image} />
    <footer className='cardFooter'></footer>


  </div>
);

export default SampleCard;
