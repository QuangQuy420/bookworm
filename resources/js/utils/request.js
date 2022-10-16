import axios from "axios";
const API_URL = process.env.MIX_API_URL;

const request = axios.create({
    baseURL: API_URL,
});

export const get = async (endpoint, options = {}) => {
    const response = await request.get(endpoint, options);
    return response.data;
};

export default request;
