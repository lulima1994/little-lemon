import './Footer.css';

function Footer() {
    return (
        <footer className="App-footer" aria-label="Site footer">
            <p>&copy; 2024 Little Lemon. All rights reserved.</p>
            <nav aria-label="Footer navigation">
                <ul>
                    <li><a href="#privacy">Privacy Policy</a></li>
                    <li><a href="#terms">Terms of Service</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </nav>
            <div aria-label="Social media links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Little Lemon on Facebook">Facebook</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Little Lemon on Twitter">Twitter</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Little Lemon on Instagram">Instagram</a>
            </div>
        </footer>
    );
}

export default Footer;
