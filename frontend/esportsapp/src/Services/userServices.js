import { IS_ADMIN, USER_INFO, USER_TOKEN_STORAGE_KEY } from "../Constants/authConstants.js";

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

export function getIsAdmin(){
    return localStorage.getItem(IS_ADMIN);
}

export function removeIsAdmin(){
    return localStorage.removeItem(IS_ADMIN);
}


