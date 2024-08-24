import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="App-nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/booking">Book a Table</Link></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Nav;
