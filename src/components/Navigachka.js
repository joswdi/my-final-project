import './Navigachka.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Navigachka() {
     return (
          <nav>
               <h2>L'Ambiente</h2>
               <ul>
                    <li><Link className='link' to="/">Home</Link></li>
                    <li><Link className='link' to="/about-me">About Me</Link></li>
               </ul>
          </nav>
     );
}

export default Navigachka;