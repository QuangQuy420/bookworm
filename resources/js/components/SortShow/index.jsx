import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
    ButtonGroup,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    UncontrolledDropdown,
} from "reactstrap";

import "./style.scss";

function SortShow(props) {
    const {
        itemShow,
        itemSort,
        defaultShow,
        defaultSort,
        titleName,
        onFilterShow,
        onFilterSort,
        pagination,
    } = props;
    const { from, to, total } = pagination;

    const [displayShow, setDisplayShow] = useState(defaultShow);
    const [displaySort, setDisplaySort] = useState(defaultSort);

    const handleFilterShow = (value, index) => {
        setDisplayShow(`Show ${value}`);
        if (onFilterShow) {
            onFilterShow(value, index);
        }
    };

    const handleFilterSort = (value, index) => {
        setDisplaySort(value);
        if (onFilterSort) {
            onFilterSort(value, index);
        }
    };

    const slideShow = itemShow.map((value, index) => {
        return (
            <DropdownItem
                key={value}
                onClick={() => handleFilterShow(value, index)}
            >
                Show {value}
            </DropdownItem>
        );
    });

    const slideSort = itemSort.map((value, index) => {
        return (
            <DropdownItem
                key={value}
                onClick={() => handleFilterSort(value, index)}
            >
                {value}
            </DropdownItem>
        );
    });

    return (
        <>
            <span>
                Show {from} - {to} of {total} {titleName}
            </span>
            <div>
                <ButtonGroup>
                    <UncontrolledDropdown>
                        <DropdownToggle caret>{displaySort}</DropdownToggle>
                        <DropdownMenu>{slideSort}</DropdownMenu>
                    </UncontrolledDropdown>
                </ButtonGroup>

                <ButtonGroup>
                    <UncontrolledDropdown>
                        <DropdownToggle caret>{displayShow}</DropdownToggle>
                        <DropdownMenu>{slideShow}</DropdownMenu>
                    </UncontrolledDropdown>
                </ButtonGroup>
            </div>
        </>
    );
}

export default SortShow;
