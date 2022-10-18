import { GET_AUTHOR_NAME, GET_CATEGORY_NAME } from "../Constants/bookConstants";

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
