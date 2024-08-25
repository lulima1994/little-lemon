import React from 'react';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';

const specialsData = [
    { title: 'Spaghetti Bolognese', description: 'Rich and hearty tomato and meat sauce served over spaghetti.', price: '$12.99' },
    { title: 'Caesar Salad', description: 'Crisp romaine lettuce tossed with Caesar dressing, croutons, and Parmesan.', price: '$8.99' },
    { title: 'Grilled Salmon', description: 'Fresh salmon grilled to perfection, served with a side of vegetables.', price: '$18.99' }
];

const testimonialsData = [
    { name: 'Jane Doe', review: 'Amazing food and wonderful service!', rating: 5, image: '/path/to/jane.jpg' },
    { name: 'John Smith', review: 'Best dining experience ever.', rating: 4, image: '/path/to/john.jpg' },
    { name: 'Alice Johnson', review: 'Loved the atmosphere and the dishes.', rating: 5, image: '/path/to/alice.jpg' }
];

function Homepage() {
    return (
        <main className="Homepage">
            <section aria-labelledby="specials-title">
                <Specials specials={specialsData} />
            </section>
            <section aria-labelledby="testimonials-title">
                <CustomersSay testimonials={testimonialsData} />
            </section>
            <section aria-labelledby="chicago-title">
                <Chicago />
            </section>
        </main>
    );
}

export default Homepage;
