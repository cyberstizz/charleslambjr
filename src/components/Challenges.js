import React from 'react';
import './Challenges.css';


const Challenges = () =>{      
return (
    <React.Fragment>
                 <div id="title">My Toughest Challenges</div>
                 <div id="arrayBuilder"></div>
                 <div id="titleDescription">One thing I really love is pushing myself to learn and grow!
During my experience learning as a developer i have had many ups and downs which have taught me two important things:

The learning never stops because the more I learn the more I realize I don’t know
and
I learn the most valuable lessons from my most annoying mistakes unfortunately.
Below are a few of the most important coding challenges I have ever encountered
Because they taught me either programming patterns I did not know or triggered paradigm shifts that changed how I Handled challenges in the future. Click the icons to view these challenges and/or there respective audio descriptions where I explain exactly how I overcame them<br/> <br/>
Oh and in case you're wondering... yes that is me in the background overcoming one of my toughest physical challenges

</div>
<div id='challengesFooter'>

    <div id='challengesIcons'>
    <div className='challengeIcon' onClick={() => {
        let description = document.getElementById('arrayBuilder');
        description.style.visibility === 'hidden' ?  description.style.visibility = 'visible' : description.style.visibility = 'hidden'; 
    }}></div>
    <div className='challengeIcon'></div>
    <div className='challengeIcon'></div>
    <div className='challengeIcon'></div>
    <div className='challengeIcon'></div>


    </div>
    <div id='challengesNames'>
    <div className='challengeName' onClick={() => {
        const description = document.getElementById('titleDescription');
        description.style.backgroundColor !== 'white' ? description.style.backgroundColor = 'white' : description.style.backgroundColor = '';
    }}>Array Builder</div>
    <div className='challengeName'>Prioritize</div>
    <div className='challengeName'>Intersection</div>
    <div className='challengeName'>Find The Outlier</div>
    <div className='challengeName'>Hard Problem</div>
    </div>

    

</div>
<div id="fullPagePic">
<div id="blueOverlay"></div>

          </div>
<div id="blueOverlay"></div>
         
         </React.Fragment>
)
}

export default Challenges;