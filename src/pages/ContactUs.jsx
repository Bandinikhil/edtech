


import React from 'react' 
import "./contsct.css"
const contact = () => {
  return (
   <>
   sd
 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190684.47812561627!2d76.86398926114052!3d9.955053700777984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0812ffd49cf55b%3A0x64bd90fbed387c99!2sKerala!5e0!3m2!1sen!2sin!4v1699336978415!5m2!1sen!2sin" width="100%" height="500" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

 <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xgedgjkr"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              name="Name"
              placeholder="username"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>

   </>
  )
}

export default contact