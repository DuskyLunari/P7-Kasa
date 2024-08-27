import React from 'react';
import PropTypes from 'prop-types';
import { Header } from "../Header";
import { Footer } from "../Footer";

export function Layout({ children }) {
    return (
        <>
            <div className="main-container">
                <Header />
                {children}
            </div>
            <Footer />
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};