import React, { useState } from 'react';
import './BookingForm.css';

function BookingForm({ availableTimes = [], dispatch, submitForm }) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');

    const [isDateValid, setIsDateValid] = useState(true);
    const [isTimeValid, setIsTimeValid] = useState(true);
    const [isGuestsValid, setIsGuestsValid] = useState(true);
    const [isOccasionValid, setIsOccasionValid] = useState(true);

    const handleDateChange = (e) => {
        setDate(e.target.value);
        setIsDateValid(true);
        dispatch({ type: 'update', date: e.target.value });
    };

    const handleGuestsChange = (e) => {
        const value = e.target.value;
        setGuests(value);
        setIsGuestsValid(value >= 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const isDateFilled = !!date;
        const isTimeFilled = !!time;
        const isGuestsValid = guests >= 1;
        const isOccasionFilled = !!occasion;

        setIsDateValid(isDateFilled);
        setIsTimeValid(isTimeFilled);
        setIsGuestsValid(isGuestsValid);
        setIsOccasionValid(isOccasionFilled);

        if (isDateFilled && isTimeFilled && isGuestsValid && isOccasionFilled) {
            const formData = {
                date,
                time,
                guests,
                occasion,
            };
            submitForm(formData);
        }
    };

    return (
        <section aria-labelledby="booking-form-title">
            <form onSubmit={handleSubmit} noValidate>
                <fieldset>
                    <legend id="booking-form-title">Booking Form</legend>

                    <label htmlFor="res-date">Choose date</label>
                    <input
                        type="date"
                        id="res-date"
                        value={date}
                        onChange={handleDateChange}
                        className={isDateValid ? '' : 'invalid'}
                    />
                    {!isDateValid && (
                        <p style={{ color: 'red' }}>Please choose a date.</p>
                    )}

                    <label htmlFor="res-time">Choose time</label>
                    <select
                        id="res-time"
                        value={time}
                        onChange={(e) => {
                            setTime(e.target.value);
                            setIsTimeValid(true);
                        }}
                        className={isTimeValid ? '' : 'invalid'}
                    >
                        <option value="" disabled>Select time</option>
                        {availableTimes.map((t, index) => (
                            <option key={index} value={t}>{t}</option>
                        ))}
                    </select>
                    {!isTimeValid && (
                        <p style={{ color: 'red' }}>Please select a time.</p>
                    )}

                    <label htmlFor="guests">Number of guests</label>
                    <input
                        type="number"
                        id="guests"
                        value={guests}
                        onChange={handleGuestsChange}
                        min="1"
                        max="20"
                        className={isGuestsValid ? '' : 'invalid'}
                    />
                    {!isGuestsValid && (
                        <p style={{ color: 'red' }}>Please enter at least one guest.</p>
                    )}

                    <label htmlFor="occasion">Occasion</label>
                    <select
                        id="occasion"
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                        className={isOccasionValid ? '' : 'invalid'}
                    >
                        <option value="" disabled>Select an occasion</option>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                    </select>
                    {!isOccasionValid && (
                        <p style={{ color: 'red' }}>Please select an occasion.</p>
                    )}

                    <button type="submit" aria-label="Make Reservation">
                        Make Reservation
                    </button>
                </fieldset>
            </form>
        </section>
    );
}

export default BookingForm;
