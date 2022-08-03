import axios from "axios";
import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
    console.info(`[request] [${JSON.stringify(config)}]`);
    return config;
}

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
    console.error(`[request error] [${JSON.stringify(error)}]`);
    return Promise.reject(error);
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
    console.info(`[response] [${JSON.stringify(response)}]`);
    return response;
}

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
    console.error(`[response error] [${JSON.stringify(error)}]`);
    return Promise.reject(error);
}

export function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
    axiosInstance.interceptors.request.use(onRequest, onRequestError);
    axiosInstance.interceptors.response.use(onResponse, onResponseError);
    return axiosInstance;
}

const instance = setupInterceptorsTo(axios.create({
    baseURL: <string>"https://quizzly-backend.vercel.app/v1/api/",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    }
}))


instance.interceptors.request.use((config: any) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.token = `Bearer ${token}`;
    }
    return config;
}
)

export default instance;