const initState = {
    displayBook: [],
    listCategoryName: [],
    listAuthorName: [],
    filter: {
        limit: "12",
        sort: "on-sale",
        link: "/get-sale-books",
    },
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
        case "SET_FILTER_SHOW":
            return {
                ...state,
                filter: {
                    ...state.filter,
                    limit: action.payload,
                },
            };
        case "SET_FILTER_SORT":
            return {
                ...state,
                filter: {
                    ...state.filter,
                    sort: action.payload.sort,
                    link: action.payload.link,
                },
            };
        default:
            return state;
    }
};

export default bookReducer;
