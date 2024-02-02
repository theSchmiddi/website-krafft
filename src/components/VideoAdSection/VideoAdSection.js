import React from 'react';
import './VideoAdSection.css';

const VideoAdSection = ({ headline, description, youtubeId }) => {
    return (
        <div className="video-ad-section">
            <h2>{headline}</h2>
            <p>{description}</p>
            <div className="video-container">
                <iframe
                    src={`https://www.youtube.com/embed/${youtubeId}`}
                    frameBorder="0"
                    allowFullScreen
                    title={headline}
                ></iframe>
            </div>
        </div>
    );
}

export default VideoAdSection;