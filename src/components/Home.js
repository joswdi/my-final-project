import React from 'react'
import './Home.css'
import MainCard from './MainCard'
import RandomCocktail from './RandomCocktail'
import CocktailSearch from './CocktailSearch'

const Home = () => {
  return (
    <div className='background'>
      <div className='logo_background'>
        <h1>L'Ambiente</h1>
      </div>
      <MainCard/>
      <div className="card">
        <h3 id='cocktail_search'>Search favorite cocktails in our site by several filters</h3>
        <p className="main_text">
          Open the door to a world of sophistication, where every element is
          thought out to the smallest detail. L'Ambiente invites you to enjoy a
          unique atmosphere that combines Italian elegance with modern style.
          <br />
          In our bar you will find: A select collection of wines and signature
          cocktails that will become a real decoration of your evening.
          <br />
          Gourmet snacks that will reveal the harmony of flavors with drinks.
          <br />
          Live music and unobtrusive background that creates the perfect mood
          for any meeting - romantic, friendly or business.
          <br />
          We have created a space where style and comfort are intertwined to
          make every visit an unforgettable experience.
          <br />
          L'Ambiente is not just a bar, it is an atmosphere that you want to
          experience again and again.
          <br />
          Visit us and feel the magic of every moment!
        </p>
        <CocktailSearch />
      </div>
      <div className="card">
        <h3 className="categoriesHeadings">Lookup a random cocktail</h3>
        <p className="main_text">
          Feeling adventurous? Let us surprise you! Use our 'Random Cocktail'
          feature to discover your next favorite drink. Whether it’s a classic
          recipe you’ve never tried or a bold, unique blend, every selection is
          a delightful mystery waiting to be revealed. Perfect for those who
          love to explore new flavors or can’t decide what to order. Sit back,
          trust your luck, and let the magic of mixology bring a fresh twist to
          your evening. Your next sip could be the start of a new favorite.
          Ready to roll the dice?
        </p>
        <RandomCocktail />
      </div>
    </div>
  )
}

export default Home