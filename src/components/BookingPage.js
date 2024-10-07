import React from 'react';
import BookingForm from './BookingForm';
import './BookingPage.css';

function BookingPage({ availableTimes, dispatch, submitForm }) {
    console.log('Available Times:', availableTimes);

    return (
        <main className="BookingPage">
            <header>
                <h1 id="booking-page-title">Book a Table</h1>
            </header>
            <section aria-labelledby="booking-page-title">
                <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
            </section>
        </main>
    );
}

export default BookingPage;
