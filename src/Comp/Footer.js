import React from 'react'
import '../CompCss/Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/service">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>


                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>📍 Location: Pune, Maharashtra</p>
                    <p>📞 <a href="tel:+9199XXXXXX1">+91 99XXXXXXX1</a></p>
                    <p>📧 <a href="mailto:info@washitnow.com">info@washitnow.com</a></p>
                </div>


                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://wa.me/919621301339" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 Spin Cycle. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer