import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import { fetchAPI, submitAPI } from '../api';

function initializeTimes() {
    const today = new Date();
    return fetchAPI(today);
}

function updateTimes(state, action) {
    if (action.type === 'update') {
        return fetchAPI(new Date(action.date));
    }
    return state;
}

function submitForm(formData, navigate) {
    const success = submitAPI(formData);
    if (success) {
        navigate('/confirmed');
    }
}

function Main() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    return (
        <main className="App-main" aria-label="Main content">
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
                <Route path="/confirmed" element={<ConfirmedBooking />} />
            </Routes>
        </main>
    );
}

export default Main;
