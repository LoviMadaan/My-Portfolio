import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
  <div className='info-box'>
    <p className='font-medium sm:text:xl text-center'>{text}</p>
    
    <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnText}
      <img src={arrow} className='w-4 h-4 object-contain'/>
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
    <InfoBox 
    text= 'Over the months, I have designed a wide variety of projects both individually and collaboratively with people from all sorts of different cultures'
    link='/projects'
    btnText='Visit my Portfolio'
    />  
  ),
  4: (
    <InfoBox 
    text= "If you're looking for someone with a passion for coding, a commitment to diversity and inclusion, and a drive to succeed. I'd love to sit down with you this week to talk about what I could bring to your development team."
    link='/contact'
    btnText="Let's Talk"
    />  
  ),
}


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
