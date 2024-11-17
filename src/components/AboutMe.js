import React from 'react'
import './AboutMe.css'
import AboutMeCard from './AboutMeCard'

const AboutMe = () => {
  return (
    <div className='background about_me'>
      <h1 className='aboutMe_logo'>L'Ambiente</h1>
      <AboutMeCard/>
    </div>
  )
}

export default AboutMe