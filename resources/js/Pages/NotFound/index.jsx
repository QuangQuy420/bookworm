import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss'

function NotFound(props) {
    const navigate = useNavigate()

    const handleBackHome = () => {
        const path = '/home';
        navigate(path);
    }

    return (
        <div className='not-found'>
            <span className='not-found-title'>404</span>
            <span className='not-found-content'>Page Not Found</span>
            <span onClick={handleBackHome} className='not-found-back'>Go to Home Page</span>
        </div>
    );
}

export default NotFound;