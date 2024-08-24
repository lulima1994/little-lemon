import React from 'react';
import './CustomersSay.css';

function CustomersSay({ testimonials }) {
    return (
        <section className="CustomersSay">
            <h2>What Our Customers Say</h2>
            <div className="testimonials-container">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-item">
                        <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                        <div className="testimonial-content">
                            <h3>{testimonial.name}</h3>
                            <p>{testimonial.review}</p>
                            <div className="testimonial-rating">
                                {Array.from({ length: testimonial.rating }, (_, i) => (
                                    <span key={i}>&#9733;</span> // Star character
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default CustomersSay;
