import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pagination } from '@mui/material';

import './Cocktail.css'

const CocktailSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [cocktails, setCocktails] = useState([]);
    const [page, setPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        // Виконуємо запити для отримання 10 випадкових коктейлів
        const fetchRandomCocktails = async () => {
            try {
                const requests = Array.from({ length: 10 }, () =>
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

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const searchCocktails = async () => {
        try {
            const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
            setCocktails(response.data.drinks || []);
            setPage(1); // Скидаємо на першу сторінку при новому пошуку
        } catch (error) {
            console.error('Error fetching cocktails:', error);
        }
    };

    useEffect(() => {
        if (searchTerm === '') {
            // Повертаємо випадкові коктейлі, коли поле пошуку порожнє
            const fetchRandomCocktails = async () => {
                try {
                    const requests = Array.from({ length: 10 }, () =>
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
        } else {
            searchCocktails();
        }
    }, [searchTerm]);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const displayedCocktails = Array.isArray(cocktails)
        ? cocktails.slice((page - 1) * itemsPerPage, page * itemsPerPage)
        : [];

    return (
        <div className='container'>
            <input
            className='input'
                type="text"
                placeholder="Search Cocktails"
                value={searchTerm}
                onChange={handleSearchChange}
                onKeyPress={(ev) => {
                    if (ev.key === 'Enter') {
                        searchCocktails();
                    }
                }}
            />
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
            {cocktails.length > itemsPerPage && (
                <Pagination
                    count={Math.ceil(cocktails.length / itemsPerPage)}
                    page={page}
                    onChange={handlePageChange}
                    color="primary"
                    className='pagination'
                />
            )}
        </div>
    );
};

export default CocktailSearch;
