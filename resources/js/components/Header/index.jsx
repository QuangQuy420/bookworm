import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss'

function Header(props) {
    const headerElement = ['Home', 'Shop', 'About', 'Cart', 'SignIn'];
    const linkElement = ['/', '/shop', '/about', '/cart', '/sign-in'];
    const [active, setActive] = useState(false);
    const currentIndex = useRef(0)

    const handleActive = (index) => {
        if (currentIndex.current != index) {
            setActive(true)
            currentIndex.current = index
        }
        else {
            setActive(false)
            currentIndex.current = -1
        }
    };

    return (
        <div className='header'>
            <Navbar>
                <NavbarBrand href="/">
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
                                </Link>
                            </NavItem>
                        )
                    })}
                </div>
            </Navbar>
        </div>
    );
}

export default Header;