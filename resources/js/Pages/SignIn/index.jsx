import React from 'react';
import LogIn from '../../components/LogIn';
import './style.scss'

function SignIn(props) {

    return (
        <div className='sign-in'>
            SignIn
            <LogIn active={true} />
        </div>
    );
}

export default SignIn;