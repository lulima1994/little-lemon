import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookingForm.css';

function BookingForm({ availableTimes = [], dispatch, submitForm }) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');
    const [isFormValid, setIsFormValid] = useState(true);
    const navigate = useNavigate();

    const handleDateChange = (e) => {
        setDate(e.target.value);
        dispatch({ type: 'update', date: e.target.value });
    };

    const handleGuestsChange = (e) => {
        const value = e.target.value;
        setGuests(value);
        if (value < 1) {
            setIsFormValid(false);
        } else {
            setIsFormValid(true);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (date && time && guests >= 1) {
            const formData = {
                date,
                time,
                guests,
                occasion,
            };
            submitForm(formData, navigate);
        } else {
            setIsFormValid(false);
        }
    };

    return (
        <section aria-labelledby="booking-form-title">
            <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
                <fieldset>
                    <legend id="booking-form-title">Booking Form</legend>

                    <label htmlFor="res-date">Choose date</label>
                    <input
                        type="date"
                        id="res-date"
                        value={date}
                        onChange={handleDateChange}
                        required
                        aria-required="true"
                    />

                    <label htmlFor="res-time">Choose time</label>
                    <select
                        id="res-time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                        aria-required="true"
                    >
                        <option value="" disabled>Select time</option>
                        {availableTimes.map((t, index) => (
                            <option key={index} value={t}>{t}</option>
                        ))}
                    </select>

                    <label htmlFor="guests">Number of guests</label>
                    <input
                        type="number"
                        id="guests"
                        value={guests}
                        onChange={handleGuestsChange}
                        min="1"
                        max="20"
                        required
                        aria-required="true"
                        aria-invalid={!isFormValid}
                        aria-describedby="guests-error"
                    />
                    {!isFormValid && (
                        <p id="guests-error" style={{ color: 'red' }}>
                            Please enter at least one guest.
                        </p>
                    )}

                    <label htmlFor="occasion">Occasion</label>
                    <select
                        id="occasion"
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                        aria-label="Select an occasion"
                    >
                        <option value="" disabled>Select an occasion</option>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                    </select>

                    <button type="submit" disabled={!date || !time || guests < 1} aria-label="Make Reservation">
                        Make Reservation
                    </button>
                </fieldset>
            </form>
        </section>
    );
}

export default BookingForm;
