import {
    login,
    register,
    //getCurrentUser,
} from "@/api/authApi";

export async function authenticateUser(credentials) {

    return await login(credentials);

}

// async function fetchCurrentUser(accessToken) {

//     const user = await getCurrentUser(accessToken);

//     return user;

// }

export async function createUser(data) {

    return await register(data);

}

// export async function createUser(data) {

//     const tokens = await register(data);

//     const user = await fetchCurrentUser(tokens.access);

//     return {

//         user,

//         tokens,

//     };

// }