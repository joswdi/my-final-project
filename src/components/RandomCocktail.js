import React, { useState, useEffect } from "react";
import axios from "axios";

const RandomCocktail = () => {
    const [cocktails, setCocktails] = useState([]);
    const [page, setPage] = useState(1);
    const itemsPerPage = 1;

    function PickRandomCocktail() {
      useEffect(() => {
        const fetchRandomCocktails = async () => {
            try {
                const requests = Array.from({ length: 1 }, () =>
                    axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
                );
                const responses = await Promise.all(requests);
                const randomCocktails = responses.map((response) => response.data.drinks[0]);
                setCocktails(randomCocktails);
            } catch (error) {
                console.error('Error fetching cocktails:', error);
            }
        };
        fetchRandomCocktails();
    }, []);
    };

    const displayedCocktails = Array.isArray(cocktails)
        ? cocktails.slice((page - 1) * itemsPerPage, page * itemsPerPage)
        : [];

    return (
        <div className='container'>
          <button id="randomCocktail" placeholder="Search Cocktails" onClick={PickRandomCocktail()} className="button_link"><a href="#cocktail_search">Pick random cocktail</a></button>
            <div className="cocktail-container">
                {displayedCocktails.map((cocktail) => (
                    <div key={cocktail.idDrink} className="cocktail-card">
                        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                        <h3>{cocktail.strDrink}</h3>
                        <p>Category: {cocktail.strCategory}</p>
                        <p>Alcoholic: {cocktail.strAlcoholic}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RandomCocktail;
