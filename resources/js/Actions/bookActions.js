import {
    FILTER_BY_AUTHOR,
    FILTER_BY_CATEGORY,
    FILTER_BY_RATING,
    GET_AUTHOR_NAME,
    GET_CATEGORY_NAME,
    GET_DISPLAY_BOOK,
    GET_PAGINATION,
    HANDLE_PAGINATE,
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

export const filterByCategory = (data) => {
    return {
        type: FILTER_BY_CATEGORY,
        payload: data,
    };
};

export const filterByAuthor = (data) => {
    return {
        type: FILTER_BY_AUTHOR,
        payload: data,
    };
};

export const filterByRating = (data) => {
    return {
        type: FILTER_BY_RATING,
        payload: data,
    };
};

export const getPagination = (data) => {
    return {
        type: GET_PAGINATION,
        payload: data,
    };
};

export const handlePaginate = (data) => {
    return {
        type: HANDLE_PAGINATE,
        payload: data,
    };
};
