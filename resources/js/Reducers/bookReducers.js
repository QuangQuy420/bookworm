const initState = {
    displayBook: [],
    listCategoryName: [],
    listAuthorName: [],
    filter: {},
};

const bookReducer = (state = initState, action) => {
    switch (action.type) {
        case "GET_CATEGORY_NAME":
            return {
                ...state,
                listCategoryName: action.payload,
            };
        case "GET_AUTHOR_NAME":
            return {
                ...state,
                listAuthorName: action.payload,
            };
        case "GET_DISPLAY_BOOK":
            return {
                ...state,
                displayBook: action.payload,
            };
        default:
            return state;
    }
};

export default bookReducer;