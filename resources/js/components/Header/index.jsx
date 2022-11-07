import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, NavItem } from "react-bootstrap";
import { useSelector } from "react-redux";
import LogIn from "../LogIn";
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
} from "reactstrap";
import * as authServices from "../../apiServices/authServices";
import "./style.scss";

function Header(props) {
    const [headerElement, setHeaderElement] = useState([
        "Home",
        "Shop",
        "About",
        "Cart",
    ]);
    const linkElement = ["/home", "/shop", "/about", "/cart"];
    const quantityCart = useSelector((state) => state.book.totalCart);
    const quantityBook = JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")).length : quantityCart;
    const nameUser = JSON.parse(localStorage.getItem("name_user"));
    const token = JSON.parse(localStorage.getItem("token")) || "";
    const [dropdownOpen, setDropdownOpen] = useState(false);
    
    const toggle = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        if(token){
            setIsLogin(true);
        }
    }, [isLogin])

    const handleLogOut = async () => {
        const token = JSON.parse(localStorage.getItem("token"));
        const headers = { headers: { Authorization: `Bearer ${token}` } };
        const result = await authServices.logOut("/logout", headers);
        localStorage.removeItem("token");
        localStorage.removeItem("name_user");
        window.location.reload();
    };

    return (
        <>
            <div className="header">
                <Navbar>
                    <NavbarBrand href="/#/home">
                        <div>
                            <img
                                alt="book"
                                src="https://bom.so/54veOe"
                                style={{
                                    width: 32,
                                }}
                            />
                            <span>BOOKWORM</span>
                        </div>
                    </NavbarBrand>

                    <div className="navbar__page">
                        {headerElement.map((element, index) => {
                            return (
                                <NavItem key={index}>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? "active" : "inactive"
                                        }
                                        to={linkElement[index]}
                                    >
                                        {element}
                                        {index == 3 && (
                                            <span> ({quantityBook})</span>
                                        )}
                                    </NavLink>
                                </NavItem>
                            );
                        })}
                        <NavItem className="sign-in">
                            {isLogin ? <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                                <DropdownToggle className="log-in">{nameUser}</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={handleLogOut}>
                                        Log Out
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown> :
                            <LogIn signIn={'Sign In'}/>}
                        </NavItem>
                    </div>
                </Navbar>
            </div>
        </>
    );
}

export default Header;
