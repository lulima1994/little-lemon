import React from 'react';
import './Chicago.css';
import restaurantImage from '../images/restaurant.jpg';

function Chicago() {
    return (
        <section className="Chicago">
            <div className="Chicago-content">
                <h2>About Little Lemon, Chicago</h2>
                <p>
                    Nestled in the heart of Chicago, Little Lemon offers a unique dining experience that combines
                    traditional recipes with a modern twist. Established in 1995, the restaurant has been a beloved
                    spot for locals and tourists alike, known for its warm atmosphere and delicious dishes.
                </p>
            </div>
            <div className="Chicago-image">
                <img src={restaurantImage} alt="Little Lemon Restaurant in Chicago" />
            </div>
        </section>
    );
}

export default Chicago;
