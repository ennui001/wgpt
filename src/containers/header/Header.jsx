import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
   <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let's Build something amazing with GPT-3 OpenAI </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure at pariatur, saepe nesciunt porro laborum iste sequi, fuga doloremque, soluta ipsa natus dolorum sint laboriosam praesentium a eaque harum ut.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder='Your Email Address'/>
        <button type='button'>Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} alt='people'/>
        <p>14000 people requested access in last 24 hours </p>
      </div>
    </div> 
    <div className="gpt3__header-image">
      <img src={ai} alt="ai" />
    </div>
  </div>
  )
}

export default Header