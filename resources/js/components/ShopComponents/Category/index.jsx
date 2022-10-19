import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { filterByCategory } from "../../../Actions/bookActions";
import "./style.scss";

function Category(props) {
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
            dispatch(filterByCategory(name))
        } 
        else {
            setIsSwitch(!isSwitch);
            setActive(false);
            currentIndex.current = -1;
            dispatch(filterByCategory(''))
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
                onClick={() => handleFilter(value.category_name, index)}
            >
                {value.category_name}
            </li>
        );
    });

    return (
        <>
            <h5>Category</h5>
            <ul className="list-filter">{slides}</ul>
        </>
    );
}

export default Category;
