import {
    login,
    //getCurrentUser,
} from "@/api/authApi";

export async function authenticateUser(credentials) {

    return await login(credentials);

}

// async function fetchCurrentUser(accessToken) {

//     const user = await getCurrentUser(accessToken);

//     return user;

// }