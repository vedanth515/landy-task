
import './light.css'

function Light() {
    return (

        <div id="lightmain" class="animate__animated animate__fadeInLeftBig">
            <div id="land-left">
                <img src="https://landy-web.netlify.app/img/svg/graphs.svg" />
            </div>
            <div id="land-right">
                <h1>Light, fast & responsive</h1>
                <p>This template is ready to use, so you don't need to change anything at a component level, unless you want to customize the default styling.</p>
                <div id="land-bottom">
                    <div id="land-bottom-left">
                        <img  id="img1" src="https://landy-web.netlify.app/img/svg/notes.svg"/>
                        <p>Why Antd?</p>
                        <p>Ant Design is a React UI library that has a lot of easy-to-use components for building elegant UI.</p>
                    </div>
                    <div id="land-bottom-right">
                    <img id="img2" src="https://landy-web.netlify.app/img/svg/notes.svg"/>
                        <p>Why styled-components?</p>
                        <p>Styled Components gives you total control over your components.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Light;