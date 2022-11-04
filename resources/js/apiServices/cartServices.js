import * as request from "../utils/request";

export const postPlaceOrder = async (endpoint, data, headers) => {
    try {
        const res = await request.post(endpoint, data, headers);
        return res.data;
    } catch (error) {
        console.log(error.response.data);
    }
};
