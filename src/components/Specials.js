import React from 'react';
import './Specials.css';

function Specials({ specials }) {
    return (
        <section className="Specials" aria-labelledby="specials-title">
            <h2 id="specials-title">Special Offers</h2>
            <div className="special-items-container">
                {specials.map((special, index) => (
                    <div key={index} className="Special-item" aria-labelledby={`special-title-${index}`} aria-describedby={`special-desc-${index}`}>
                        <img src={special.image} alt={special.title} className="special-image" />
                        <div className="title-price">
                            <h3 id={`special-title-${index}`}>{special.title}</h3>
                            <p id={`special-price-${index}`} className="price">{special.price}</p>
                        </div>
                        <p id={`special-desc-${index}`}>{special.description}</p>
                        <a href="#" className="order-link">Order a delivery</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Specials;
