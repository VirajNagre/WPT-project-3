import { USER_TOKEN_STORAGE_KEY } from "../constants/authConstants";

export function getToken(){
    return localStorage.getItem(USER_TOKEN_STORAGE_KEY);
}

export function removeToken(){
    return localStorage.removeItem(USER_TOKEN_STORAGE_KEY);
}
