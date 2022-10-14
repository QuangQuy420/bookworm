import React from 'react';
import './style.scss'

function Footer(props) {
    return (
        <div className='footer'>
            <div className="footer__image">
                <img src="https://lh3.googleusercontent.com/kSue6Hy7y1joZRrGLZOhOZKUrQ1OvKFO74qhM5HHztyg71lDHK3K-631VrSiHbljuhBG7pJH90RS3MAPvrcODd90aYy4V93RTw=w960-rj-nu-e365" alt="bookworm" />
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