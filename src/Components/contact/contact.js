import './contact.css'

function Contact(){
    return(
        <div id="contactMain">
        <div id="contact-left" class="animate__animated animate__fadeInLeftBig">
            <h1>Contact form</h1>
            <p>The following form demonstrates form validation in action. Contact form component reduces the amount of time it is being re-rendered by the user as it embraces uncontrolled form validation to reduce any unnecessary performance penalty.</p>
        </div>
        <div id="contact-right" class="animate__animated animate__fadeInRightBig">
             <label>Name</label>
             <input placeholder="Your Name"></input>
             <label>Email</label>
             <input placeholder="Your Email"></input>
             <label>Message</label>
             <input id="textarea" placeholder="Your Message"></input>
             <button>Submit</button>
        </div>
     </div>
    )
}
export default Contact;