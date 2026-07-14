import api from "@/api/api";
import { getAccessToken } from "@/utils/tokenManager";

export default function setupInterceptors() {

    api.interceptors.request.use(

    (config) => {

        const accessToken = getAccessToken();

        console.log("URL :", config.url);
        console.log("TOKEN :", accessToken);

        if (accessToken) {

            config.headers.Authorization = `Bearer ${accessToken}`;

        }

        console.log(config.headers);

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