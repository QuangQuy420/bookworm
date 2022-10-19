import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { filterByAuthor } from "../../../Actions/bookActions";
import "./style.scss";

function Author(props) {
    const { listName } = props;
    const dispatch = useDispatch()
    const [active, setActive] = useState(false);
    const [isSwitch, setIsSwitch] = useState(true);
    const currentIndex = useRef(-1);

    const handleFilter = (name, index) => {
        if (currentIndex.current !== index) {
            setIsSwitch(!isSwitch);
            setActive(true);
            currentIndex.current = index;
            dispatch(filterByAuthor(name))
        } 
        else {
            setIsSwitch(!isSwitch);
            setActive(false);
            currentIndex.current = -1;
            dispatch(filterByAuthor(''))
        }
    };

    const slides = listName.map((value, index) => {
        return (
            <li
                className={
                    active && index == currentIndex.current
                        ? "item-filter item-active"
                        : "item-filter"
                }
                key={index}
                onClick={() => handleFilter(value.author_name, index)}
            >
                {value.author_name}
            </li>
        );
    });

    return (
        <>
            <h5>Author</h5>
            <ul className="list-filter">{slides}</ul>
        </>
    );
}

export default Author;
