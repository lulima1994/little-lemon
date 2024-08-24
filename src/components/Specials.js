import React from 'react';
import './Specials.css';

function Specials({ specials }) {
    return (
        <section className="Specials">
            <h2>Special Offers</h2>
            <ul>
                {specials.map((special, index) => (
                    <li key={index} className="Special-item">
                        <h3>{special.title}</h3>
                        <p>{special.description}</p>
                        <p>Price: {special.price}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Specials;
