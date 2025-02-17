
import './landingpage.css'

import 'animate.css';

function LandingPage(){
    return(
        <div id="landmain"  class="animate__animated animate__fadeInRightBig">
            <div id="land-left">
                <h1>Landing page template for developers & startups</h1>
                <p>Beautifully designed templates using React.js, ant design and styled-components! Save weeks of time and build your landing page in minutes.</p>
                <div id="btns">
                      <button id='btn1'>Explore</button>
                      <button id="btn2">Learn more</button>
                </div>
            </div>
            <div id="land-right">
                <img src="https://landy-web.netlify.app/img/svg/developer.svg"/>
            </div>
        </div>
    )
}

export default LandingPage;