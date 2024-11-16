import React from 'react'
import './Footer.css'
import LogoAmpli from '../images/Logo_png.png'

const Footer = () => {
  return (
    <div className='footer'>
     <a href='https://classroom.google.com/u/1/c/NjY2ODM0MDcxODk2?hl=ru'>AFE-44</a>
     <p>All rights reserved.</p>
     <a href='https://ampli.com.ua/'><img src={LogoAmpli} alt='Logo'/></a>
    </div>
  )
}

export default Footer