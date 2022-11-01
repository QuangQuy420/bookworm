import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss'
import { useSelector } from 'react-redux';
import LogIn from '../LogIn';

function Header(props) {
    const headerElement = ['Home', 'Shop', 'About', 'Cart', 'SignIn'];
    const linkElement = ['/home', '/shop', '/about', '/cart', ''];
    const quantityCart = useSelector(state => state.book.totalCart)
    const [active, setActive] = useState(false);
    const [showLogIn, setShowLogIn] = useState(false)
    const currentIndex = useRef(0)

    const handleActive = (index) => {
        if (index == 4) {
            setShowLogIn(true)
        }
        if (currentIndex.current != index) {
            setActive(true)
            currentIndex.current = index
        }
        else {
            setActive(false)
            currentIndex.current = -1
        }
    };

    const handleShow = (modal) => {
        setShowLogIn(!modal);
    }

    return (
        <>
        <div className='header'>
            <Navbar>
                <NavbarBrand href="/#/home">
                    <div>
                        <img
                            alt="book"
                            src="https://bom.so/54veOe"
                            style={{
                                width: 32
                            }}
                        />
                        <span>BOOKWORM</span>
                    </div>
                </NavbarBrand>
                
                <div className='navbar__page'>
                    {headerElement.map((element, index) => {
                        return (
                            <NavItem key={index}>
                                <Link 
                                    className={
                                        (active && index == currentIndex.current)
                                        ||(currentIndex.current == 0 && index == 0)  
                                        ? 'active' 
                                        : ''
                                    }
                                    to={linkElement[index]}
                                    onClick={() => handleActive(index)}
                                >
                                    {element}
                                    {index == 3 && <span> ({quantityCart})</span>}
                                </Link>
                            </NavItem>
                        )
                    })}
                </div>
            </Navbar>
        </div>
        {showLogIn && <LogIn active={showLogIn} onShow={handleShow}/>}
        </>
    );
}

export default Header;