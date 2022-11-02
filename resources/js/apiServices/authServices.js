import * as request from "../utils/request";

export const logIn = async (endpoint, data) => {
    try {
        const res = await request.post(endpoint, data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const logOut = async (endpoint, headers) => {
    try {
        const res = await request.get(endpoint, headers);
        return res.data;
    } catch (error) {
        console.log(error.response.data);
    }
};
