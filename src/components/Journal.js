import React from 'react';
import './Journal.css';



const today = new Date();


let month= today.getMonth()+1;

if(month === 1){
       month = 'January';
} else if(month === 2){
       month ='February';
} else if(month === 3){
       month = 'March';
} else if(month === 4){
       month = 'April';
}else if(month === 5){
       month = 'May';
}else if(month === 6){
       month = 'June';
}else if(month === 7){
       month = 'July';
}else if(month === 8){
       month = 'August';
}else if(month === 9){
       month = 'September';
}else if(month === 10){
       month = 'October';
}else if(month === 11){
       month = 'November';
}else if(month === 12){
       month = 'December';
}

const date = month+'-'+today.getDate()+'-'+today.getFullYear();
let time;
let hours = today.getHours();
if (hours > 12) {
    hours -= 12;
    time = hours + ":" + today.getMinutes() + 'pm';
} else if (hours === 0) {
   hours = 12 ;
   time = hours + ":" + today.getMinutes();

};
const dateTime = date+' '+time;

const Journal = () =>{

const JournalEntry = (props) =>{

       return(
              <div className='entryDiv'>
                <div id='actualEntry'>{props.entry}</div>                  
                <div id='datediv'>posted on {props.dateTime}</div>
              </div>

       )
}

return(
       <div id='entireJournalPage'>


<JournalEntry dateTime={'April-23-2021 9:45pm'} entry={'What a day! spent the majority of the day practicing the pern stack and good ol typing. tomorrows forecast, more work'} />
<JournalEntry dateTime={dateTime} entry={'this is a test entry'} />
<JournalEntry dateTime={dateTime} entry={'another test'} />


</div>

       )
}
export default Journal;