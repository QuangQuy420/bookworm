import * as request from "../utils/request";

export const getListBooks = async (endpoint, options) => {
    try {
        const res = await request.get(endpoint, options);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getAllName = async (endpoint) => {
    try {
        const res = await request.get(endpoint);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
