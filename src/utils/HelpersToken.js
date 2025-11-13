const LOCAL_STORAGE_KEY = "AUTH_ACCESS";

// helpers de token
export const setAccessToken = (t) => localStorage.setItem(LOCAL_STORAGE_KEY, t);
export const getAccessToken = () => localStorage.getItem(LOCAL_STORAGE_KEY) ?? "";
export const clearAccessToken = () => localStorage.removeItem(LOCAL_STORAGE_KEY);