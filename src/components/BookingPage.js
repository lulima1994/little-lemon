import React from 'react';
import BookingForm from './BookingForm';

function BookingPage({ availableTimes, dispatch }) {
    return (
        <main className="BookingPage">
            <header>
                <h1 id="booking-page-title">Book a Table</h1>
            </header>
            <section aria-labelledby="booking-page-title">
                <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
            </section>
        </main>
    );
}

export default BookingPage;
