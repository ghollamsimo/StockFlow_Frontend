import axios from "axios";

const api = () => {
    const token = localStorage.getItem("token");

    const instance = axios.create({
        baseURL: "http://localhost:8080/api",
        headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : "",
        },
    });


    instance.interceptors.request.use(
        (config) => {
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    instance.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response && error.response.status === 401) {
            }
            return Promise.reject(error);
        }
    );

    return instance;
};

export default api;
