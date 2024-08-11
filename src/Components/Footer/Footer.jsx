import React from 'react'
import { Link } from 'react-router-dom'

import '../Footer/FooterStyle.css'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="upper-footer">
            <div className="usefull-links">
                <Link to="/" className='usefull-link-items'>Financial Services</Link> <br />
                <Link to="/" className='usefull-link-items'>Investment Planning</Link> <br />
                <Link to="/" className='usefull-link-items'>Tax & Accountancy</Link> <br />
                <Link to="/" className='usefull-link-items'>Insurance Guidance</Link> <br />
                <Link to="/" className='usefull-link-items'>Asset Management</Link> <br />
                <Link to="/" className='usefull-link-items'>Brokerage</Link> <br />
            </div>

            <div className="info-detail">
                <div className="logo">
                    <div className="logo-main">
                        FIN-INSIGHTS
                    </div>
                    <div className="logo-sub">
                        It starts from YOU
                    </div>
                </div>
                <p className='info-detail-desc'>We are dedicated to helping businesses and individuals navigate the <br /> complex world of finance <br /></p>
            </div>

            <div className="additional-links">
                <Link to="/" className='usefull-link-items additional-links-items'>Home</Link>
                <Link to="/" className='usefull-link-items additional-links-items'>Services</Link>
                <Link to="/" className='usefull-link-items additional-links-items'>About Us</Link>
                <Link to="/" className='usefull-link-items additional-links-items'>Clients</Link>
                <Link to="/" className='usefull-link-items additional-links-items'>Careers</Link>
                <Link to="/" className='usefull-link-items additional-links-items'>Contact Us</Link>
            </div>
        </div>

        <div className="lower-footer">
            <div className="social-media">
                        <img src="" alt="facebook" className='fb-icon footer-icon'/>
                        <img src="" alt="X" className='x-icon footer-icon' />
                        <img src="" alt="linkedin" className='linkedin-icon footer-icon'/>
                    </div>
            </div>
    </div>
  )
}

export default Footer