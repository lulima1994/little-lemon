import React from 'react';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';

import spaghettiBologneseImg from '../images/spaghetti-bolognese.svg';
import caesarSaladImg from '../images/caesar-salad.svg';
import grilledSalmonImg from '../images/grilled-salmon.svg';
import janeImg from '../images/jane.svg';
import johnImg from '../images/john.svg';
import aliceImg from '../images/alice.svg';

const specialsData = [
    {
        title: 'Spaghetti Bolognese',
        description: 'Rich and hearty tomato and meat sauce served over spaghetti.',
        price: '$12.99',
        image: spaghettiBologneseImg
    },
    {
        title: 'Caesar Salad',
        description: 'Crisp romaine lettuce tossed with Caesar dressing, croutons, and Parmesan.',
        price: '$8.99',
        image: caesarSaladImg
    },
    {
        title: 'Grilled Salmon',
        description: 'Fresh salmon grilled to perfection, served with a side of vegetables.',
        price: '$18.99',
        image: grilledSalmonImg
    }
];

const testimonialsData = [
    { name: 'Jane Doe', review: 'Amazing food and wonderful service!', rating: 5, image: janeImg },
    { name: 'John Smith', review: 'Best dining experience ever.', rating: 4, image: johnImg },
    { name: 'Alice Johnson', review: 'Loved the atmosphere and the dishes.', rating: 5, image: aliceImg }
];

function Homepage() {
    return (
        <main className="Homepage">
            <section aria-labelledby="specials-title">
                <Specials specials={specialsData} />
            </section>
            <section aria-labelledby="chicago-title">
                <Chicago />
            </section>
            <section aria-labelledby="testimonials-title">
                <CustomersSay testimonials={testimonialsData} />
            </section>
        </main>
    );
}

export default Homepage;
