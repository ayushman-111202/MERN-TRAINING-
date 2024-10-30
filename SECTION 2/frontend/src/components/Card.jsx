import React from 'react';

const Card = ({ title, description }) => {
    return (
        <div className='bg-white p-4 rounded-lg border space-y-5'>
            <h1 className='text-2xl font-bold'> {title}</h1>
            <p> {description} </p>
            <div className="flex gap-5">
                <button className='bg-black px-2 py-1 rounded-md text-white'>Primary Button</button>
                <button className='border px-2 py-1 rounded-md'>Secondary Button</button>
            </div>
        </div>
    )
}

export default Card;
