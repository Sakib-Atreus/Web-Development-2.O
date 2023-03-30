import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1 className="Title">My Rest Countries App</h1>
            <h1>Hello From Rest Countries : {countries.length}</h1>
            {/* {
                countries.map(country => <Country 
                    name={country.name.common} 
                    area={country.area}
                    population={country.population}>
                    </Country>)
            } */}
            <div className="countries-container">
            {
                countries.map(country => <Country
                    country = {country}
                    key = {country.cca3}
                    >
                </Country>)
            }
            </div>
        </div>
    );
};

export default Countries;