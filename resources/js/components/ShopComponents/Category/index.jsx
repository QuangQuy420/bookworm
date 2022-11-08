import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { filterByCategory, handlePaginate } from "../../../Actions/bookActions";
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from "reactstrap";
import "./style.scss";

function Category(props) {
    const { listName } = props;
    const dispatch = useDispatch();
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

    const handleFilter = (categoryId, index) => {
        if (currentIndex.current !== index) {
            setIsSwitch(!isSwitch);
            setActive(true);
            currentIndex.current = index;
            dispatch(filterByCategory(categoryId));
            dispatch(handlePaginate(1));
        } else {
            setIsSwitch(!isSwitch);
            setActive(false);
            currentIndex.current = -1;
            dispatch(filterByCategory(""));
            dispatch(handlePaginate(1));
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
                onClick={() => handleFilter(value.id, index)}
            >
                {value.category_name.charAt(0).toUpperCase() +
                    value.category_name.slice(1)}
            </li>
        );
    });

    return (
        <div>
            <Accordion open={open} toggle={toggle}>
                <AccordionItem>
                    <AccordionHeader targetId="1">Category</AccordionHeader>
                    <AccordionBody accordionId="1">
                        <ul className="list-filter">{slides}</ul>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default Category;
