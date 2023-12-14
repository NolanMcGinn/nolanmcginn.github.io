import React from 'react'
import Venus from "../assets/images/venus.jpg"
import "../styles/Contact.css"

function Contact() {
  return (
    <div className="contact">
        <div className="leftSide" style={{backgroundImage: `url(${Venus})` }}></div>
        <div className="rightSide">
            <h1>Contact Us</h1>
            <form id="contact-form" method="POST">
                <label htmlFor='name'>Full Name</label>
                <input name="name" placeholder="Enter Your Full Name" type="text"/>
                <label htmlFor='email'>Email</label>
                <input name="email" placeholder="Enter Your Email" type="email"/>
                <label htmlFor='discuss'>What would you like to discuss?</label>
                <textarea rows="15" placeholder='What do you want to talk about' name='discuss' required> </textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
