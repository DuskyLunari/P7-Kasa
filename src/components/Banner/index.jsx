import React from 'react';
import PropTypes from 'prop-types';
import './Banner.scss';

export function Banner({ bannerImg, text }) {
    return (
        <div className="banner">
            {text && <div className="banner__overlay"></div>}
            <img
                className="banner__img"
                src={bannerImg}
                alt="Banner"
            />
            {text && (
                <p className="banner__text">{text}</p>
            )}
        </div>
    );
}

Banner.propTypes = {
    bannerImg: PropTypes.string.isRequired,
    text: PropTypes.string,
};