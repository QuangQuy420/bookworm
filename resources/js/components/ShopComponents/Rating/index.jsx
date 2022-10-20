import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { filterByRating } from "../../../Actions/bookActions";
import "./style.scss";

function Rating(props) {
    const dispatch = useDispatch()
    const { listStar } = props;
    const [active, setActive] = useState(false);
    const [isSwitch, setIsSwitch] = useState(true);
    const currentIndex = useRef(-1);

    const handleFilter = (star, index) => {
        if (currentIndex.current !== index) {
            setIsSwitch(!isSwitch);
            setActive(true);
            currentIndex.current = index;
            dispatch(filterByRating(star))
        } 
        else {
            setIsSwitch(!isSwitch);
            setActive(false);
            currentIndex.current = -1;
            dispatch(filterByRating(''))
        }
    };

    const slides = listStar.map((star, index) => {
        return (
            <li
                className={
                    active && index == currentIndex.current
                        ? "item-filter item-active"
                        : "item-filter"
                }
                key={index}
                onClick={() => handleFilter(star, index)}
            >
                {star} Star
            </li>
        );
    });

    return (
        <>
            <h5>Rating Review</h5>
            <ul className="list-filter">{slides}</ul>
        </>
    );
}

export default Rating;
