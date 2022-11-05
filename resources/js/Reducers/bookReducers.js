const initState = {
    displayBook: [],
    pagination: [],
    listCategoryName: [],
    listAuthorName: [],
    detailBook: {
        book: {},
        rating: {},
        reviews: [],
        meta: {},
        total: [],
    },
    filter: {
        limit: "",
        sort: "on-sale",
        sort_review: "DESC",
        link: "/get-sale-books",
        author: "",
        category: "",
        star: "",
        page: "1",
    },
    totalCart: 0,
    nameUser: "",
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
        case "SET_DISPLAY_DEFAULT":
            return {
                ...state,
                filter: {
                    ...state.filter,
                    limit: action.payload.limit,
                    page: action.payload.page.page,
                    author: action.payload.author,
                    category: action.payload.category,
                    star: action.payload.star,
                    link: action.payload.link,
                },
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
        case "SET_FILTER_SORT_REVIEW":
            return {
                ...state,
                filter: {
                    ...state.filter,
                    sort_review: action.payload,
                },
            };
        case "SET_DEFAULT_REVIEW":
            return {
                ...state,
                filter: {
                    ...state.filter,
                    limit: action.payload.limit,
                    star: action.payload.star,
                    page: action.payload.page,
                },
            };
        case "FILTER_BY_AUTHOR":
            return {
                ...state,
                filter: {
                    ...state.filter,
                    author: action.payload,
                },
            };
        case "FILTER_BY_CATEGORY":
            return {
                ...state,
                filter: {
                    ...state.filter,
                    category: action.payload,
                },
            };
        case "FILTER_BY_RATING":
            return {
                ...state,
                filter: {
                    ...state.filter,
                    star: action.payload,
                },
            };
        case "GET_PAGINATION":
            return {
                ...state,
                pagination: action.payload,
            };
        case "HANDLE_PAGINATE":
            return {
                ...state,
                filter: {
                    ...state.filter,
                    page: action.payload,
                },
            };
        case "GET_DETAIL_BOOK":
            return {
                ...state,
                detailBook: {
                    ...state.detailBook,
                    book: action.payload.book,
                    rating: action.payload.rating,
                    reviews: action.payload.reviews,
                    meta: action.payload.meta,
                    total: action.payload.total,
                },
            };
        case "SET_CART_QUANTITY":
            return {
                ...state,
                totalCart: action.payload,
            };
        default:
            return state;
    }
};

export default bookReducer;
