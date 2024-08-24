import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';

function initializeTimes() {
    return ["17:00", "18:00", "19:00", "20:00", "21:00"];
}

function updateTimes(state, action) {
    // Por enquanto, retornamos os mesmos horários disponíveis, independentemente da data.
    return state;
}

function Main() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    return (
        <main className="App-main">
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
            </Routes>
        </main>
    );
}

export default Main;
