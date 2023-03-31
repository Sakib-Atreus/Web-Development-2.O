import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import './Cosmetics.css';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmetics(data))
    }, [])
    return (
        <div>
            <h1>Welcome to Cosmetics Shop!!!</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic
                    cosmetic={cosmetic}
                    key={cosmetic.id}
                ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;