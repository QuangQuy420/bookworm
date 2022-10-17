import React from "react";
import {
    ButtonGroup,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    UncontrolledDropdown,
} from "reactstrap";

import "./style.scss";

function SortShop(props) {
    return (
        <>
            <span>Show 1 - 10 of 125 books</span>
            <div>
                <ButtonGroup>
                    <UncontrolledDropdown>
                        <DropdownToggle caret>Sort by On Sale</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Sort by On Sale</DropdownItem>
                            <DropdownItem>Sort by Popular</DropdownItem>
                            <DropdownItem>Sort by price: low to high</DropdownItem>
                            <DropdownItem>Sort by price: high to low</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </ButtonGroup>

                <ButtonGroup>
                    <UncontrolledDropdown>
                        <DropdownToggle caret>Show 20</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Show 5</DropdownItem>
                            <DropdownItem>Show 10</DropdownItem>
                            <DropdownItem>Show 15</DropdownItem>
                            <DropdownItem>Show 20</DropdownItem>
                            <DropdownItem>Show 25</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </ButtonGroup>
            </div>
        </>
    );
}

export default SortShop;
