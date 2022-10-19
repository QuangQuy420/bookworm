import {
    GET_AUTHOR_NAME,
    GET_CATEGORY_NAME,
    GET_DISPLAY_BOOK,
    SET_FILTER_SHOW,
    SET_FILTER_SORT,
} from "../Constants/bookConstants";

export const getCategoryName = (data) => {
    return {
        type: GET_CATEGORY_NAME,
        payload: data,
    };
};

export const getAuthorName = (data) => {
    return {
        type: GET_AUTHOR_NAME,
        payload: data,
    };
};

export const getDisplayBook = (data) => {
    return {
        type: GET_DISPLAY_BOOK,
        payload: data,
    };
};

export const setFilterShow = (data) => {
    return {
        type: SET_FILTER_SHOW,
        payload: data,
    };
};

export const setFilterSort = (data) => {
    return {
        type: SET_FILTER_SORT,
        payload: data,
    };
};
