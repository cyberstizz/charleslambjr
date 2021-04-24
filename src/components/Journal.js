import React from 'react';
import './Journal.css';


const Journal = (props) =>{

const JournalEntry = (props) =>{

const today = new Date();
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
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