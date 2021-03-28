import './App.css';

function App() {
  return (
    <div className="App">
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

      <div class="footer-social-icons">
    <h4 class="_14">Follow me on</h4>
    <ul class="social-icons">
   
    <li><a href="" class="social-icon">
 <i class="fa fa-twitter"></i></a></li>

    <li><a href="" class="social-icon"> 
 <i class="fa fa-youtube"></i></a></li>
    <li><a href="" class="social-icon"> 
 <i class="fa fa-linkedin"></i></a></li>
    <li><a href="" class="social-icon"> 
 <i class="fa fa-github"></i></a></li>
    </ul>
</div>


      </div>
      <div className="greeting">Hello, I'm </div> 
      <br/>
      <br/>
      <div className="name">Charles Lamb Jr.</div>
      <div className="topSlogan">A passionate software engineer from Harlem New York</div>
      <div className="bottomSlogan">now living in atl</div>
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
