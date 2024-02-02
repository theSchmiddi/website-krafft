import React from 'react';
import { Link } from 'react-router-dom';
import './ImageCard.css';

const ImageCard = ({ imagePath, headline, subline, link }) => {
    return (
        <div className="image-card">
            <Link to={link}>
                <div className="image-content">
                    <img src={imagePath} alt={headline} />
                    <div className="info-overlay">
                        <h3 className="image-headline">{headline}</h3>
                        <p className="image-subline">{subline}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ImageCard;