import React from 'react'
import { Link } from 'react-router-dom';

const InfoBox = ({ text, link, btnText }) => (
  <div className='info-box'>
    {text}
    <Link to={link}>
      {btnText}
    </Link>
  </div>
)

const renderContent = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
      Hello! I am <span className='font-semibold'>Lovi Madaan</span>👋
      <br />
      A Full Stack Developer with experience in 
      <br />
      HTML, CSS, JavaScript, React
      <br />
      and Ruby on Rails.
    </h1>
  ),
  2: (
    <InfoBox 
    text= 'I have an interest in working on a variety of projects with different cultures and diverse people.'
    link='/about'
    btnText='Learn More'
    />    
  ),
  3: (
    <h1>3</h1>
  ),
  4: (
    <h1>4</h1>
  ),
}


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
