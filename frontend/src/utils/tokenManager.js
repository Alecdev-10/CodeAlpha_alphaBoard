const ACCESS_TOKEN_KEY = "accessToken";
const REFRESH_TOKEN_KEY = "refreshToken";

export function setTokens(access, refresh) {

    sessionStorage.setItem(ACCESS_TOKEN_KEY, access);
    sessionStorage.setItem(REFRESH_TOKEN_KEY, refresh);

}

export function getAccessToken() {

    return sessionStorage.getItem(ACCESS_TOKEN_KEY);

}

export function getRefreshToken() {

    return sessionStorage.getItem(REFRESH_TOKEN_KEY);

}

export function clearTokens() {

    sessionStorage.removeItem(ACCESS_TOKEN_KEY);
    sessionStorage.removeItem(REFRESH_TOKEN_KEY);

}