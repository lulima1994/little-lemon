import React from 'react';
import './Specials.css';

function Specials({ specials }) {
    return (
        <section className="Specials" aria-labelledby="specials-title">
            <h2 id="specials-title">Special Offers</h2>
            <ul>
                {specials.map((special, index) => (
                    <li key={index} className="Special-item" aria-labelledby={`special-title-${index}`} aria-describedby={`special-desc-${index} special-price-${index}`}>
                        <h3 id={`special-title-${index}`}>{special.title}</h3>
                        <p id={`special-desc-${index}`}>{special.description}</p>
                        <p id={`special-price-${index}`}>Price: {special.price}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Specials;
