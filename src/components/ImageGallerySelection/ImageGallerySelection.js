import React from 'react';
import ImageCard from './ImageCard'; // Stellen Sie sicher, dass der Pfad korrekt ist
import './ImageGallerySelection.css';

const ImageGallerySelection = ({ headline, description, images }) => {
    return (
        <div className="image-gallery-section">
            <div className="image-gallery-text">
                <h2>{headline}</h2>
                <p>{description}</p>
            </div>
            <div className="image-gallery-grid">
                {images.map((image, index) => (
                    <ImageCard
                        key={index}
                        imagePath={image.path}
                        headline={image.headline}
                        subline={image.subline}
                        link={image.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageGallerySelection;