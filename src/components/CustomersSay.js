import React from 'react';
import './CustomersSay.css';

function CustomersSay({ testimonials }) {
    return (
        <section className="CustomersSay" aria-labelledby="customers-say-title">
            <h2 id="customers-say-title">What Our Customers Say</h2>
            <div className="testimonials-container">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-item" aria-labelledby={`testimonial-${index}-name`} aria-describedby={`testimonial-${index}-review testimonial-${index}-rating`}>
                        <img src={testimonial.image} alt={`Photo of ${testimonial.name}`} className="testimonial-image" />
                        <div className="testimonial-content">
                            <h3 id={`testimonial-${index}-name`}>{testimonial.name}</h3>
                            <p id={`testimonial-${index}-review`}>{testimonial.review}</p>
                            <div id={`testimonial-${index}-rating`} className="testimonial-rating" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
                                {Array.from({ length: testimonial.rating }, (_, i) => (
                                    <span key={i}>&#9733;</span>
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
