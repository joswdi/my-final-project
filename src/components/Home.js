import React from 'react'
import './Home.css'
import MainCard from './MainCard'

const Home = () => {
  return (
    <div className='home'>
      <div className='logo_background'>
        <h1>L'Ambiente</h1>
      </div>
      <MainCard/>
    </div>
  )
}

export default Home