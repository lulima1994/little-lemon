import React, { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import { fetchAPI, submitAPI } from '../api';

function initializeTimes() {
    const today = new Date();
    const times = fetchAPI(today);
    console.log('Initial Times:', times);
    return times || [];
}

function updateTimes(state, action) {
    if (action.type === 'update') {
        const newTimes = fetchAPI(new Date(action.date));
        return newTimes;
    }
    return state;
}

function Main() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    const navigate = useNavigate();

    const submitForm = (formData) => {
        const success = submitAPI(formData);
        if (success) {
            navigate('/confirmed');
        }
    };

    return (
        <main className="App-main" aria-label="Main content">
            <Routes>
                <Route path="*" element={<Homepage />} />
                <Route
                    path="/booking"
                    element={<BookingPage availableTimes={availableTimes} dispatch={() => { console.log('Mock dispatch called'); }} submitForm={submitForm} />}
                />
                <Route path="/confirmed" element={<ConfirmedBooking />} />
            </Routes>
        </main>
    );
}

export default Main;
