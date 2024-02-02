import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header-container">
            <Link to="/" className="header-logo">
                <img src="/logo.svg" alt="Logo" />
                <h1>Krafft</h1>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Startseite</Link>
                    </li>
                    <li>
                        <Link to="/services">Dienstleistungen</Link>
                    </li>
                    <li>
                        <Link to="/photogallery">Foto Gallery</Link>
                    </li>
                    <li>
                        <Link to="/contactus">Kontaktieren Sie uns!</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;