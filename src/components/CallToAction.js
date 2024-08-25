import './CallToAction.css';

function CallToAction() {
    return (
        <section className="CallToAction" aria-labelledby="cta-title">
            <h1 id="cta-title">Welcome to Little Lemon!</h1>
            <p>Discover our fresh and delicious dishes. Book a table now and enjoy a great dining experience.</p>
            <button aria-label="Book a table at Little Lemon">Book a Table</button>
        </section>
    );
}

export default CallToAction;
