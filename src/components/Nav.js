import './Nav.css';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

function Nav() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <nav className="App-nav">
            <Link to="/" className="logo-link" onClick={scrollToTop}>
                <img src={logo} alt="Little Lemon Logo" className="nav-logo" />
            </Link>
            <ul>
                <li>
                    <Link to="/" onClick={scrollToTop}>Home</Link>
                </li>
                <li>
                    <Link to="/booking">Book a Table</Link>
                </li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Nav;
