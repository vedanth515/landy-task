
import './navbar.css'

function Navbar(){
    return(
        <div id="navbar">
            <div id="nav-left">
                <img src="https://landy-web.netlify.app/img/svg/logo.svg"/>
            </div>
            <div id="nav-right">
                <p>About</p>
                <p>Mission</p>
                <p>Product</p>
                <button id='btn'>Contact</button>
            </div>
        </div>
    )
}

export default Navbar;