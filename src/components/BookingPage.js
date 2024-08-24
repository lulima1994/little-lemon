import React from 'react';
import BookingForm from './BookingForm';

function BookingPage({ availableTimes, dispatch }) {
    return (
        <div className="BookingPage">
            <h1>Book a Table</h1>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </div>
    );
}

export default BookingPage;
