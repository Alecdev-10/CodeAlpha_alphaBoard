let logoutHandler = null;

export function setLogoutHandler(handler) {
    logoutHandler = handler;
}

export function logout() {
    if (logoutHandler) {
        logoutHandler();
    }
}