import './sub-footer.css'

function SubFooter(){
    return(
        <div id="sub-footer-main">
            <div id="sub-footer-left">
                 <img src="https://landy-web.netlify.app/img/svg/logo.svg"/>
            </div>
            <div id="sub-footer-right">
                <img src="https://landy-web.netlify.app/img/svg/github.svg"/>
                <img src="https://landy-web.netlify.app/img/svg/twitter.svg"/>
                <img src="https://landy-web.netlify.app/img/svg/linkedin.svg"/>
                <img src="https://landy-web.netlify.app/img/svg/medium.svg"/>
                <button>Buy Me a Coffee</button>
            </div>
        </div>
    )
}

export default SubFooter;