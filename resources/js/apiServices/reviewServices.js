import * as request from "../utils/request";

export const getListReviews = async (endpoint, options) => {
    try {
        const res = await request.get(endpoint, options);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const postReview = async (endpoint, data) => {
    try {
        const res = await request.post(endpoint, data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
