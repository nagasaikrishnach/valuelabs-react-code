import axios from "axios";

const API_BASE_URL = 'http://localhost:3000';

let interceptor = {};
const axiosInterceptor = () => {
    axios.interceptors.request.use(function (request) {
        let url = `${API_BASE_URL}${request.url}`;
        return {
            ...request,
            url: url
        };
    }, function (error) {
        return Promise.reject(error);
    });
}

interceptor = {
    axiosInterceptor
};

export default interceptor;