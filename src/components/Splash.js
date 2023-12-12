import './Splash.css';
import React from 'react';
import { Link } from 'react-router-dom';
import ProjectsCard from './ProjectsCard';
import mogulFashionShot from '../mogulFashionShot.png';
import guttiesScreenshot from '../guttiesScreenshot.png';
import basicBankScreenshot from '../basicBankScreenshot.png';



const Splash = () =>{

    const projectsData = [
        {
          title: "Mogul Fashion",
          url: "https://mogulfashion-65ec42dc2783.herokuapp.com",
          image: mogulFashionShot,
          description: "MERN Stack appliction"
        },
        {
            title: "Gutties Outlet",
            url: "https://gutties-outlet-58ebc01c68c7.herokuapp.com",
            image: guttiesScreenshot,
            description: "Node Js PostgresQl Authentication E commmerce website"
          },{
            title: "Basic Bank",
            url: "https://basic-bank-49327162c5c5.herokuapp.com/",
            image: basicBankScreenshot,
            description: "React - Python/Django Cross Framework"
          },
      ];
    
      return (



        <React.Fragment>
        <div className='splashDivTop'>
            <h2 data-text="Charles Lamb Jr V2 coming December 15th">
                Charles Lamb Jr V2 coming December 15th
            </h2>
      
      
       <br/>
       <br/>

       <Link to="./home"><button className='splashButton'><h3>visit old website</h3></button></Link>
       </div>


        <div className='projectsDiv'>
            <h1 style={{textAlign: "center", marginBottom: "2vh"}} >Projects</h1>

            {projectsData.map(project => <ProjectsCard key={project.title} project={project} />)}



        </div>
        <div className='aboutDiv'>
        <h2>About</h2>

        </div>
        <div className='codingDiv'>
        <h2>Coding</h2>

        </div>
        <div className='contactDiv'>
            Contact
        </div>
        <div className='footerDiv'></div>

       


        </React.Fragment>

    )
};

export default Splash;