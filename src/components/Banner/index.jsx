import React from 'react';
import './Banner.scss';

export function Banner({ bannerImg, text }) {
    return (
        <main>
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
        </main>
    );
}