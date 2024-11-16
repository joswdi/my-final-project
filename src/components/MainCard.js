import React from 'react'
import './MainCard.css'
import { Link } from 'react-router-dom'

const MainCard = () => {
  return (
    <div className='main_card'>
     <h3>Search favorite cocktails in our site by many filters</h3>
     <p className='main_text'>Open the door to a world of sophistication, where every element is thought out to the smallest detail. L'Ambiente invites you to enjoy a unique atmosphere that combines Italian elegance with modern style.
     <br/>
     In our bar you will find:
     A select collection of wines and signature cocktails that will become a real decoration of your evening.
     <br/>
     Gourmet snacks that will reveal the harmony of flavors with drinks.
     <br/>
     Live music and unobtrusive background that creates the perfect mood for any meeting - romantic, friendly or business.
     <br/>
     We have created a space where style and comfort are intertwined to make every visit an unforgettable experience.
     <br/>
     L'Ambiente is not just a bar, it is an atmosphere that you want to experience again and again.
     <br/>
     Visit us and feel the magic of every moment!</p>
     <Link className='button_link' to="/categories">Go to categories</Link>
    </div>
  )
}

export default MainCard