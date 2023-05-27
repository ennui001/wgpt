import React from 'react';
import './whatGPT3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id='wgpt3'>
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3" text="We are what we do this is . It's the most beauitiful time of the year lights fill the street spreading so much cheer i should be playing in the winter snow but imma be under the missletoe .Like  of plate heard oh ought."/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The posibility is beyond your imagination</h1>
          <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="We provide chatting with the bots to solve your solution and queries you might have."/>
        <Feature title="Knowledgebase" text="A bank for knowledge . Learn new things everyday ,improve and hone your skills."/>
        <Feature title="Education" text="It is a must for everyone. It is our right."/>
      </div>
    </div>
  )
}

export default WhatGPT3