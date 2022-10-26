import * as request from "../utils/request";

export const getListReviews = async (endpoint, options) => {
    try {
        const res = await request.get(endpoint, options);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
