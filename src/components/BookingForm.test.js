import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

test('displays error message when number of guests is less than 1', () => {
    render(<BookingForm availableTimes={[]} dispatch={() => { }} submitForm={() => { }} />);

    const guestsInput = screen.getByLabelText(/number of guests/i);
    fireEvent.change(guestsInput, { target: { value: '0' } });

    const errorMessage = screen.getByText(/please enter at least one guest/i);
    expect(errorMessage).toBeInTheDocument();
});

test('enables submit button only when all fields are valid', () => {
    render(<BookingForm availableTimes={["17:00", "18:00"]} dispatch={() => { }} submitForm={() => { }} />);

    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const submitButton = screen.getByText(/make reservation/i);

    expect(submitButton).toBeDisabled();

    fireEvent.change(dateInput, { target: { value: '2024-08-24' } });
    fireEvent.change(timeSelect, { target: { value: '17:00' } });
    fireEvent.change(guestsInput, { target: { value: '2' } });

    expect(submitButton).toBeEnabled();
});
