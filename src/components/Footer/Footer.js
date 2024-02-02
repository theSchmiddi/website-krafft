import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-links">
                <Link to="/impressum">Impressum</Link>
                <Link to="/contactus">Kontaktieren Sie uns!</Link>
            </div>
        </footer>
    );
}

export default Footer;