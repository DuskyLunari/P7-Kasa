import React, { useState } from 'react';
import './Collapse.scss';

export function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse-container">
            <div className="collapse">
                <button
                    className={`collapse__toggle ${isOpen ? 'open' : 'closed'}`}
                    onClick={toggleCollapse}
                >
                    {title}
                    <i
                        className={`collapse__icon fas fa-chevron-up ${isOpen ? 'open' : 'closed'}`}
                    ></i>
                </button>
                <div className={`collapse__content ${isOpen ? 'open' : 'closed'}`}>
                    {children}
                </div>
            </div>
        </div>
    );
}