import React from 'react';
import './possiblity.css';
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
   <div className="gpt3__possibility section__padding " id='possibility'>
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibility is beyond your imagination</h1>
      <p>yet what a friend we have in jesus what a privilege to bare all because we dont carry everything to god in prayer</p>
      <h4>Request Early Access To Get Started</h4>
    </div>
   </div>
  )
}

export default Possibility