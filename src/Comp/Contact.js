import React, { useContext, useEffect } from 'react'
import '../CompCss/Contact.css'
import Ct from './Ct'
import Cookies from 'js-cookie'
import Nav from './Nav'
import Footer from './Footer'
function Contact() {
  let obj = useContext(Ct)
    useEffect(() => {
      let x = Cookies.get("auth")
      if (x !== undefined) {
        obj.updstate(JSON.parse(x))
      }
    }, [])
  return (
     <>
    <Nav/>
    <div className="contact-container">
      {/* Contact Information */}
      <div className="contact-info">
        <h2>📍 Our Location</h2>
        <p>123 Laundry Street, New Delhi, 110001</p>

        <h2>📞 Contact Us</h2>
        <p>📧 Email: support@laundryservice.com</p>
        <p>📱 Phone: +91 99XXXXXXX1</p>

        <h2>🕒 Working Hours</h2>
        <p>24×7 Available</p>

        <h2>🔗 Follow Us</h2>
        <div className="social-links">
          <a href="https://wa.me/9199XXXXX1" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href="https://facebook.com/laundryservice" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com/laundryservice" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>

      <div className="map">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448181.0382213324!2d76.81306209409102!3d28.64727993573919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd1a9a9e776f%3A0x1c6b072d44d52743!2sDelhi!5e0!3m2!1sen!2sin!4v1707650835123"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="contact-form">
        <h2>✉️ Send Us a Message</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact