import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, area, region, population, flags} = props.country;
    console.log(props.country);
    return (
        <div className='country'>
            {/* <h1>Country Name : {props.name}</h1>
            <h3>Area : {props.area}</h3>
            <h2>Population : {props.population}</h2> */}

            <h1>Name : {name.common}</h1>
            <img src={flags.png} alt="" />
            <h3><small>Area : {area}</small></h3>
            <h2><small>Region : {region}</small></h2>
            <p>Population : {population}</p>
        </div>
    );
};

export default Country;