import React from 'react';
import './Journal.css';


const Journal = (props) =>{

const JournalEntry = (entry, postTime) =>{
       return(
              <div id='entireJournalPage'>
              <div className='entryDiv'>{props.entry}</div>
              <div>posted on {props.postTime}</div>

              </div>
       )
}

return(
<JournalEntry entry={'waterfountan'} postTime={'april 22nd'} />
       )
}
export default Journal;