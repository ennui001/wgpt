import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text"> Do you want to achieve higher goals too bad your late idiot.</h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>naite iin dayo sonna hito koto ni boku wa yonde sa mirai ga hitoshii</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Comapany</h4>
          <p>Terms and Condition</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>Your on the phone with your girlfriend she is upset.</p>
          <p>043-9374764345</p>
          <p>yespayme.net</p>
        </div>
      </div>
      
      <div className="gpt3__footer-copyright">
        <p>2023 GPT-3 . All Rights reserved</p>
      </div>
    </div>
  )
}

export default Footer