import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Caroussel.scss';

export function Caroussel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const hasMultipleImages = images.length > 1;

    return (
        <div className="caroussel">
            {hasMultipleImages && (
                <button className="caroussel__arrow caroussel__arrow--left" onClick={handlePrev}>
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
            )}
            <div className="caroussel__images">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            </div>
            {hasMultipleImages && (
                <button className="caroussel__arrow caroussel__arrow--right" onClick={handleNext}>
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            )}
            {hasMultipleImages && (
                <div className="caroussel__count">
                    {currentIndex + 1} / {images.length}
                </div>
            )}
        </div>
    );
}

Caroussel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};