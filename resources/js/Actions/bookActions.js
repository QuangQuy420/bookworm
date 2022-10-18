import {
    GET_AUTHOR_NAME,
    GET_CATEGORY_NAME,
    GET_DISPLAY_BOOK,
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
