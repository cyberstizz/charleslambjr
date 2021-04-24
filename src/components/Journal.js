import React from 'react';
import './Journal.css';


const Journal = (props) =>{

const JournalEntry = (props) =>{



const today = new Date();

let hours = today.getHours();
if (hours > 12) {
    hours -= 12;
} else if (hours === 0) {
   hours = 12;
};

const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
const time = hours + ":" + today.getMinutes() + ":" + today.getSeconds();
const dateTime = date+' '+time;
       return(
              <div className='entryDiv'>
                     {props.entry}<br />
              <div>posted on {dateTime}</div>
              </div>

       )
}

return(
       <div id='entireJournalPage'>


<JournalEntry entry={'waterfountan'} postTime={'april 22nd'} />

</div>

       )
}
export default Journal;