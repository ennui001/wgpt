import React from 'react';
import './features.css';
import {Feature} from '../../components'

const featuresData = [
  {
   title:' Improving Distrusts instantly',
   text:'This is not just about learning something new . It is about how much you gain from this i mean some really random shit dont i that was hard couldnt use colon.'
 },
 {
  title:' Become A acitve participant',
  text:'It is about how much you gain from this i mean some really random shit dont i that was hard couldnt use colon. Wow now it is time to have dinner i did this myself i have spent two not complete days completing this wow.'
},
{
  title:' Feel Free to Message',
  text:'This is not just about learning something new . It is about how much you gain from this i mean some really random shit dont i that was hard couldnt use colon. Wow now it is time to have dinner i did this myself i have spent two not complete days completing this wow.'
},
{
  title:'What the hell is this county',
  text:'This is not just about learning something new . It is about how much you gain from this i mean some really random shit dont i that was hard couldnt use colon. Wow now it is time to have dinner i did this myself i have spent two not complete days completing this wow.'
},
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id='features'>
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
          <p>Request Early Access to get started </p>
        </h1>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index)=>(
          // instead of calling features again and again we call feature array 
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features