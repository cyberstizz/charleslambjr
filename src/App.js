import './App.css';

function App() {
  return (
    <div className="App">
      <div className="transparent-background"></div>
      <div className="decorativeDiv"></div>
      <div className="navBar">
    
    <div className="logo"></div>

    <div className="navOptions">
    <div className="home">Home</div>
    <div className="portfolio">Portfolio</div>
    <div className="lamb">Lamb</div>
    <div className="causes">Causes</div>
    <div className="about">About</div>
    <div className="journal">Journal</div>

    </div>

      </div>
    <div className="leftFoldSection">
      <div className="socialMediaButtons">

      <a href="https://www.youtube.com/channel/UCK85fCsjJ53CrOzVnmTbp-A" class="fa fa-youtube" alt="youtube in link"></a>
      <a href="https://www.linkedin.com/in/charles-lamb-jr/" class="fa fa-linkedin" alt="linked in link"></a>
      <a href="https://www.instagram.com/charleslambjrdev/" class="fa fa-instagram" alt="instgram in link"></a>



      </div>
      <div className="greeting">Hello, I'm </div> 
      <br/>
      <br/>
      <div className="name">Charles Lamb Jr.</div>
      <div className="topSlogan">A passionate software engineer from New York</div>
      <div className="bottomSlogan">with two years of web development experience</div>
      <div className="contactArea">
          <div className="githubContact">
          <i class="fa fa-github"></i></div>
          <div className="githubInfo">github.com/cyberstizz</div>
      
          <div className="phonecontact"></div>
      </div>
      <div className="buttons">
      <button className="portfolioButton">Portfolio</button>
      <button className="contactButton">Contact</button>


      </div>
      </div>
     
      <div className="rightFoldSection">

      </div>

      <div className="skewedBackgroundDecoration"></div>



    </div>
  );
}

export default App;
