import api from "@/api/api";

export async function login(credentials) {

    const response = await api.post(
        "auth/login/",
        credentials
    );

    return response.data;
}

export async function register(data) {

    const response = await api.post(

        "/auth/register/",

        data

    );

    return response.data;

}

export async function getCurrentUser() {

    const response = await api.get(
        "auth/me/"
    );

    return response.data;
}

export async function refreshToken(refresh) {

    const response = await api.post(
        "auth/refresh/",
        {
            refresh,
        }
    );

    return response.data;
}