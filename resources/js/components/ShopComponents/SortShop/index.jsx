import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilterShow, setFilterSort } from "../../../Actions/bookActions";
import {
    ButtonGroup,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    UncontrolledDropdown,
} from "reactstrap";

import "./style.scss";

function SortShop(props) {
    const dispatch = useDispatch()

    const itemShow = [5, 10, 15, 20]
    const itemSort = ['Sort by On Sale', 'Sort by Popular', 'Sort by price: low to high', 'Sort by price: high to low']
    const [ displayShow, setDisplayShow ] = useState('Show 12')
    const [ displaySort, setDisplaySort ] = useState('Sort By On Sale')

    const handleFilterShow = (value) => {
        setDisplayShow(`Show ${value}`)
        dispatch(setFilterShow(value))
    } 

    const handleFilterSort = (value, index) => {
        const data = {
            sort: "",
            link: ""
        }
        if (index == 0) {
            data.sort = "",
            data.link = "/get-sale-books"
        } 
        else if (index == 1) {
            data.sort = "",
            data.link = "/get-popular-books"
        }
        else if (index == 2) {
            data.sort = "ASC"
            data.link = "/get-all-books"
        }
        else if (index == 3) {
            data.sort = "DESC"
            data.link = "/get-all-books"
        }  
        setDisplaySort(value)
        dispatch(setFilterSort(data))
    }

    const slideShow = itemShow.map(value => {
        return (
            <DropdownItem 
                key={value}
                onClick={() => handleFilterShow(value)}
            >
                Show {value}
            </DropdownItem>
        )
    })

    const slideSort = itemSort.map((value, index) => {
        return (
            <DropdownItem 
                key={value}
                onClick={() => handleFilterSort(value, index)}
            >
                {value}
            </DropdownItem>
        )
    })

    return (
        <>
            <span>Show 1 - 10 of 125 books</span>
            <div>
                <ButtonGroup>
                    <UncontrolledDropdown>
                        <DropdownToggle caret>{displaySort}</DropdownToggle>
                        <DropdownMenu>
                            {slideSort}
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </ButtonGroup>

                <ButtonGroup>
                    <UncontrolledDropdown>
                        <DropdownToggle caret>{displayShow}</DropdownToggle>
                        <DropdownMenu>
                            {slideShow}
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </ButtonGroup>
            </div>
        </>
    );
}

export default SortShop;
