import { USER_INFO, USER_TOKEN_STORAGE_KEY } from "../Constants/authConstants.js";

export function getToken(){
    return localStorage.getItem(USER_TOKEN_STORAGE_KEY);
}

export function removeToken(){
    return localStorage.removeItem(USER_TOKEN_STORAGE_KEY);
}

export function removeUserInfo(){
    return localStorage.removeItem(USER_INFO);
}

export function getUserInfo(){
    return localStorage.getItem(USER_INFO);
}
