import {
    login,
    getCurrentUser,
} from "@/api/authApi";

export async function authenticateUser(credentials) {

    const tokens = await login(credentials);

    return {
        user: await fetchCurrentUser(tokens.access),
        tokens,
    };

}

async function fetchCurrentUser(accessToken) {

    const user = await getCurrentUser(accessToken);

    return user;

}