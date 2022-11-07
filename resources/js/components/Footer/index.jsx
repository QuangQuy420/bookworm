import React from 'react';
import './style.scss'

function Footer(props) {
    return (
        <div className='footer'>
            <div className="footer__image">
                <img src="/images/logo-footer.png" alt="bookworm" />
            </div>
            <div className="footer__info">
                <h6>BOOKWORM</h6>
                <span>An Binh Apartment</span>
                <span>0123456789</span>
            </div>
        </div>
    );
}

export default Footer;