import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import './style.scss'

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
                <div className="container">{children}</div>
            <Footer />  
        </>
    );
}

export default DefaultLayout;