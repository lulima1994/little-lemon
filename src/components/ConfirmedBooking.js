import React from 'react';

function ConfirmedBooking() {
    return (
        <main className="confirmed-booking" aria-labelledby="confirmation-title">
            <section>
                <h1 id="confirmation-title">Reservation Confirmed!</h1>
                <p>Thank you for your reservation. We look forward to serving you!</p>
            </section>
        </main>
    );
}

export default ConfirmedBooking;
