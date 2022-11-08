import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { filterByRating, handlePaginate } from "../../../Actions/bookActions";
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from "reactstrap";
import "./style.scss";

function Rating(props) {
    const dispatch = useDispatch();
    const { listStar } = props;
    const [active, setActive] = useState(false);
    const [isSwitch, setIsSwitch] = useState(true);
    const currentIndex = useRef(-1);
    const [open, setOpen] = useState("0");

    const toggle = (id) => {
        if (open === id) {
            setOpen("0");
        } else {
            setOpen(id);
        }
    };

    const handleFilter = (star, index) => {
        if (currentIndex.current !== index) {
            setIsSwitch(!isSwitch);
            setActive(true);
            currentIndex.current = index;
            dispatch(filterByRating(star));
            dispatch(handlePaginate(1));
        } else {
            setIsSwitch(!isSwitch);
            setActive(false);
            currentIndex.current = -1;
            dispatch(filterByRating(""));
            dispatch(handlePaginate(1));
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
        <div>
            <Accordion open={open} toggle={toggle}>
                <AccordionItem>
                    <AccordionHeader targetId="1">Rating Review</AccordionHeader>
                    <AccordionBody accordionId="1">
                        <ul className="list-filter">{slides}</ul>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default Rating;
