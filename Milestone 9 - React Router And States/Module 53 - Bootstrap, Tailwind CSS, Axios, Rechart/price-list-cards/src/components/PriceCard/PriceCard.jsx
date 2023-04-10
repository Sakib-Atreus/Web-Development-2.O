import React from 'react';
import Features from '../Features/Features';

const PriceCard = ({price}) => {
    return (
        <div className='bg-indigo-400 mt-4 rounded-md p-4 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-5xl font-extrabold text-purple-700'>
                    ${price.price}
                </span>
                <span className='text-2xl text-white font-bold'>/mon</span>
            </h2>
            <h5 className='text-2xl my-6 text-center font-bold'>{price.name}</h5>
            <p className='font-bold text-white underline'>Features: </p>
            {
                price.features.map((feature, idx) => <Features
                key={idx}
                feature={feature}
                ></Features>)
            }
            <button className='w-full mt-auto bg-green-500 hover:bg-green-700 py-2 rounded text-white font-bold'>Buy Now</button>
        </div>
    );
};

export default PriceCard;