import React from 'react';
import './Challenges.css';


const arrayBuilderPopup = 'Write a function arrayBuilder that takes in a count object and returns an array filled with the appropriate numbers of elements. The order of the elements in the array does not matter, but repeated elements should be grouped.';

const PrioritizePopup = 'Create a function prioritize that accepts an array and a callback. The callback will return either true or false. prioritize will iterate through the array and perform the callback on each element, and return a new array, where all the elements that yielded a return value of true come first in the array, and the rest of the elements come second.';

const intersectionPopup = 'Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. ';

const findTheOutlierPopup = 'You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.';

const hardProblemPopup = '';


const Challenges = () =>{      
return (

    <React.Fragment>

                 <div id="title">My Toughest Challenges</div>

                 {/* this code creates the element that displays the description for array builder */}
                   <div id="arrayBuilderDescrition" ><span style={{color: 'orange'}}>Array Builder </span><br/> <br/>{arrayBuilderPopup}
                 <br/><br/>
                     <div id="arrayBuilderButtons">
                       <button id='arrayBuilderAudio'>Description</button>
                       <button id='arrayBuilderCode' onClick={() => {
        let description = document.getElementById('arrayBuilder');
        description.style.visibility === 'hidden' ?  description.style.visibility = 'visible' : description.style.visibility = 'hidden'; 
    }}> My Solution</button>
                     </div>
                 </div>
        
        {/* this is the code that displays the div that is the screenshot for arraybuilder */}

                 <div id="arrayBuilder" onClick={() => {
        let description = document.getElementById('arrayBuilder');
        description.style.visibility === 'hidden' ?  description.style.visibility = 'visible' : description.style.visibility = 'hidden'; 
    }}></div>



<div id="prioritizeDescrition" ><span style={{color: 'orange'}}>Prioritize </span><br/> <br/>{PrioritizePopup}
                 <br/><br/>
                     <div id="prioritizeButtons">
                       <button id='prioritizeAudio'>Description</button>
                       <button id='prioritizeCode' onClick={() => {
        let description = document.getElementById('arrayBuilder');
        description.style.visibility === 'hidden' ?  description.style.visibility = 'visible' : description.style.visibility = 'hidden'; 
    }}> My Solution</button>
                     </div>
                 </div>








                 <div id="titleDescription">One thing I really love is pushing myself to learn and grow!
During my experience learning as a developer i have had many ups and downs which have taught me two important things:

The learning never stops because the more I learn the more I realize I don’t know
and
I learn the most valuable lessons from my most annoying mistakes unfortunately.
Below are a few of the most important coding challenges I have ever encountered
Because they taught me either programming patterns I did not know or triggered paradigm shifts that changed how I Handled challenges in the future. Click the icons to view these challenges and/or there respective audio descriptions where I explain exactly how I overcame them<br/> <br/>

</div>
<div id='challengesFooter'>

    <div id='challengesIcons'>
    <div className='challengeIcon' onClick={() => {
        let description = document.getElementById('arrayBuilderDescrition');
        description.style.visibility === 'hidden' ?  description.style.visibility = 'visible' : description.style.visibility = 'hidden'; 
    }}></div>
    <div className='challengeIcon' onClick={() => {
        let description = document.getElementById('prioritizeDescrition');
        description.style.visibility === 'hidden' ?  description.style.visibility = 'visible' : description.style.visibility = 'hidden'; 
    }}></div>
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


<div id="blueOverlay"></div>

<div id="fullPagePic">
</div>
  

          </React.Fragment>      
)
}

export default Challenges;