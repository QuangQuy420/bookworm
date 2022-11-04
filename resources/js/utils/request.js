import axios from "axios";
const API_URL = process.env.MIX_API_URL;

const request = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-type": "application/json",
    },
});

const getToken = () => {
    try {
        return JSON.parse(localStorage.getItem("token"));
    } catch (error) {
        return "";
    }
};

export const get = async (endpoint, options = {}) => {
    const token = getToken();
    const response = await request.get(endpoint, options, {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
    return response;
};

export const post = async (endpoint, data = {}) => {
    const token = getToken();
    console.log(token);
    const response = await request.post(endpoint, data, {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
    return response;
};

export default request;
