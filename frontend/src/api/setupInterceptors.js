import api from "@/api/api";
import { getAccessToken } from "@/utils/tokenManager";

export default function setupInterceptors() {

    api.interceptors.request.use(

        (config) => {

            const accessToken = getAccessToken();

            if (accessToken) {

                config.headers.Authorization = `Bearer ${accessToken}`;

            }

            return config;

        },

        (error) => Promise.reject(error)

    );

    api.interceptors.response.use(

        (response) => response,

        (error) => {

            return Promise.reject(error);

        }

    );

}