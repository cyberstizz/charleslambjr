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
               <JournalEntry dateTime={'April-30-2021 11:47pm'} entry={'Wow,I think this  is my latest journal to date. In any case I am still not done with the project but progress is great. Tomorrow=> sunday rest!'} />
 <JournalEntry dateTime={'April-29-2021 10:44pm'} entry={'wow these media queries are tough! It may take a few more days to complete them but I am gaining a lot of experience.'} />
<JournalEntry dateTime={'April-28-2021 10:18pm'} entry={'today was pretty stressful, but I understand that the stressrul days are imortant in the pursuit of a worthwile objective. But my sleep will be stressless!'} />
 <JournalEntry dateTime={'April-27-2021 11:11pm'} entry={'It was an interesting day today. I had some setbacks on my projects, but I learned a lot, so that makes me happy. I"ll catch up tomorrow not including media queries.'} />
<JournalEntry dateTime={'April-26-2021 10:32pm'} entry={'I can say with great gratitude, that I worked hard today. Hopefully before the night concludes I will complete this website, but in any case I have made great progress.'} />
<JournalEntry dateTime={'April-25-2021 10:46pm'} entry={'Even though Sunday was mu off day, I learned a lot. The best part is that I finally solved an issue I was having for weeks with the challneges page, so my mood is great.'} />
<JournalEntry dateTime={'April-24-2021 11:43pm'} entry={'Another incredible day. Besides hitting new highs on my shoulder press I have pretty much completed the Lamb page of this portfolio.tomorrows forecast... Sunday rest'} />
<JournalEntry dateTime={'April-23-2021 9:45pm'} entry={'What a day! spent the majority of the day practicing the pern stack and good ol typing. tomorrows forecast, more work'} />
<JournalEntry dateTime={dateTime} entry={'this is a test entry'} />


</div>

       )
}
export default Journal;