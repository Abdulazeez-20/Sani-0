import React from 'react'
import './footer.css'
import footerLogo from '../../assets/logo.svg'
const Footer = () => {
  return (
    <div className='footer section_padding'>
      <div className="footer_heading">
        <h1 className='gradient_text'>Do you want to step into the future before others</h1>
      </div>

      <div className="footer_btn">
        <p>Request Early Access</p>
      </div>

      <div className="footer_links">
        <div className="footer_links-logo">
          <img src={footerLogo} alt="logo" />
          <p>Owned by Sani-0, All rights reserved</p>
        </div>

        <div className="footer_links-div">
          <h4>links</h4>
          <p>Social media</p>
          <p>Address</p>
          <p>Contacts</p>
          <p>Overones</p>
        </div>

        <div className="footer_links-div">
          <h4>Company</h4>
          <p>Social media</p>
          <p>Address</p>
          <p>Contacts</p>
        </div>


        <div className="footer_links-div">
          <h4>Get in touch</h4>
          <p>Phone number</p>
          <p>Address</p>
          <p>sani-0@gamil.com</p>
        </div>
      </div>
      <div className="footer_copyright">
        <p>Sani-0 2018, All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer