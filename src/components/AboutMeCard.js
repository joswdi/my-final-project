import React from 'react'
import './AboutMeCard.css'

const AboutMeCard = () => {
  return (
     <div className='card'>
     <h3 className='aboutMe_heading'>Info about author of the project</h3>
    <p className='main_text'>
     <span>First name and last name:</span> Oleksandra Kovalchuk
     <br/> 
     <span>Group:</span><a href='https://classroom.google.com/u/1/c/NjY2ODM0MDcxODk2?hl=ru' className='aboutMe_link'>AFE-44</a> 
     <br/>
     <span>My GitHub:</span><a href='https://github.com/joswdi/my-final-project' className='aboutMe_link'>joswdi</a>
     <br/> 
     <span>My Trello:</span><a href='https://trello.com/invite/b/671fb501576e74e9f062bdad/ATTI7f96eb0204e664e4a8440b7c83d4a9755CC31526/індивідуальний-проект' className='aboutMe_link'>joswdi</a>  
     <br/>
     <span>Instagram:</span><a href='https://www.instagram.com/joswdi?igsh=MXZ1ZTNrbGxoZnE2' className='aboutMe_link'>joswdi</a> 
     </p>
     </div>
  )
}

export default AboutMeCard