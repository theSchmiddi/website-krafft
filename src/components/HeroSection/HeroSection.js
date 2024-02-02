import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = ({ backgroundImage, headline, subheadline }) => {
    return (
        <div className="hero-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className='hero-headline-container'>
                <h1 className="hero-headline">{headline}</h1>
                <p className="hero-subheadline">{subheadline}</p>
                <Link to="/contactus">
                    <button className="hero-button">Kontaktieren Sie uns!</button>
                </Link>
            </div>
        </div>
    );
}

export default HeroSection;