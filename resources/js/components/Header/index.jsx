import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import LogIn from "../LogIn";
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
} from "reactstrap";
import * as authServices from "../../apiServices/authServices";
import { setNameUser } from "../../Actions/bookActions";

function Header(props) {
    const [headerElement, setHeaderElement] = useState([
        "Home",
        "Shop",
        "About",
        "Cart",
    ]);
    const linkElement = ["/home", "/shop", "/about", "/cart", ""];
    const quantityCart = useSelector((state) => state.book.totalCart);
    const nameLogin = useSelector((state) => state.book.nameUser);
    const [active, setActive] = useState(false);
    const [showLogIn, setShowLogIn] = useState(false);
    const dispatch = useDispatch();
    const currentIndex = useRef(0);

    const nameUser = JSON.parse(localStorage.getItem("name_user"));

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [render, setRender] = useState(false);

    const toggle = () => {
        if (!nameUser) {
            setDropdownOpen(false);
        } else {
            setDropdownOpen(!dropdownOpen);
        }
    };

    const handleActive = (index) => {
        if (currentIndex.current != index) {
            setActive(true);
            currentIndex.current = index;
        } else {
            setActive(false);
            currentIndex.current = -1;
        }
    };

    const handleLogin = () => {
        setShowLogIn(true);
    };

    const handleLogOut = async () => {
        const token = JSON.parse(localStorage.getItem("token"));
        const headers = { headers: { Authorization: `Bearer ${token}` } };
        const result = await authServices.logOut("/logout", headers);
        localStorage.removeItem("token");
        localStorage.removeItem("name_user");
        // dispatch(setNameUser(""));
    };

    const handleShow = (modal) => {
        setShowLogIn(!modal);
    };

    const handleNameInfo = (name) => {
        let header = [...headerElement, (headerElement[6] = name)];
        setHeaderElement(header);
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
                                    <Link
                                        className={
                                            (active &&
                                                index ==
                                                    currentIndex.current) ||
                                            (currentIndex.current == 0 &&
                                                index == 0)
                                                ? "active"
                                                : ""
                                        }
                                        to={linkElement[index]}
                                        onClick={() => handleActive(index)}
                                    >
                                        {element}
                                        {index == 3 && (
                                            <span> ({quantityCart})</span>
                                        )}
                                    </Link>
                                </NavItem>
                            );
                        })}
                        <NavItem className="sign-in" onClick={handleLogin}>
                            {/* {nameUser ? nameUser : 'Sign In'} */}
                            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                                <DropdownToggle>
                                    {nameUser ? nameUser : "Sign In"}
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={handleLogOut}>
                                        Log Out
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </NavItem>
                    </div>
                </Navbar>
            </div>
            {showLogIn && (
                <LogIn
                    active={showLogIn}
                    onShow={handleShow}
                    onNameInfo={handleNameInfo}
                />
            )}
        </>
    );
}

export default Header;
