// AuthContext.js
import React, { createContext, useState,useEffect } from 'react';
import { getIsAdmin, getToken, getUserInfo, removeIsAdmin, removeToken, removeUserInfo } from '../../Services/userServices';
import { IS_ADMIN, USER_INFO } from '../../Constants/authConstants';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin,setIsAdmin] = useState();
  const [userInfo,setUserInfo] = useState();

  useEffect(() => {
    const fetchData = async () => {
        if (getToken()) {
            setIsAuthenticated(true);
            const admin = getIsAdmin(); // Assuming getIsAdmin() is an asynchronous function
            console.log("admin value- ", admin);
            if (admin===true) {
                console.log("setting isAdmin true", admin);
                setIsAdmin(true);
            }
        }

        if (getUserInfo()) {
            setUserInfo(getUserInfo());
        }
        console.log("from authe con useffect");
    };

    fetchData();
}, []);


  const login = (loginInfo) => {
    // console.log("from context",loginInfo)
    localStorage.setItem(USER_INFO,JSON.stringify(loginInfo));
    setUserInfo(JSON.stringify(loginInfo))
    
    localStorage.setItem(IS_ADMIN,loginInfo.isAdmin);
    console.log("typeof loginInfo.isAdmin ",typeof loginInfo.isAdmin);
    setIsAdmin(loginInfo.isAdmin)
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Perform logout logic
    removeToken();
    removeUserInfo();
    removeIsAdmin();
    setIsAdmin(false);
    setIsAuthenticated(false);
  };

  const registerEvent = (eventId) => {
    console.log("registerEvent called" );
    console.log("userInfo from registerEvent",userInfo,typeof userInfo)
    let JSONuserInfo = JSON.parse(userInfo);
    console.log("userInfo from registerEvent 2 - JSONuserInfo",JSONuserInfo,typeof JSONuserInfo)
    const updatedUserInfo = {
      ...JSONuserInfo,
      registeredEvents: [...JSONuserInfo.registeredEvents, eventId],
    };
    console.log("updatedUserInfo",updatedUserInfo)
    localStorage.setItem(USER_INFO, JSON.stringify(updatedUserInfo));
    setUserInfo(updatedUserInfo);
  };




  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout ,userInfo,registerEvent,isAdmin}}>
      {children}
    </AuthContext.Provider>
  );
}
