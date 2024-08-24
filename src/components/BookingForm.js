import React, { useState } from 'react';
import './BookingForm.css';

function BookingForm({ availableTimes = [], dispatch }) { // Coloque um array vazio como valor padrão
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');

    const handleDateChange = (e) => {
        setDate(e.target.value);
        dispatch({ type: 'update', date: e.target.value }); // Envia a data selecionada para atualizar os horários
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Reservation submitted", { date, time, guests, occasion });
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={handleDateChange}
                required
            />

            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
            >
                {availableTimes.map((t, index) => (
                    <option key={index} value={t}>{t}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                min="1"
                max="20"
                required
            />

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
            >
                <option value="">Select an occasion</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
            </select>

            <button type="submit">Make Reservation</button>
        </form>
    );
}

export default BookingForm;
