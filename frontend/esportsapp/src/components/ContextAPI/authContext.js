// AuthContext.js
import React, { createContext, useState,useEffect } from 'react';
import { getToken, getUserInfo } from '../../Services/userServices';
import { USER_INFO } from '../../Constants/authConstants';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [userInfo,setUserInfo] = useState();

  useEffect(() => {
    
    const token = getToken();
    if (token) {
      setIsAuthenticated(true);
    }
    const uData = getUserInfo(); 
    console.log(uData,"data retrieved from local stroage")
    if(uData){
      setUserInfo(uData);
  }
    
  }, []);

  const login = (loginInfo) => {
    // console.log("from context",loginInfo)
    localStorage.setItem(USER_INFO,JSON.stringify(loginInfo));
    setUserInfo(JSON.stringify(loginInfo))
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Perform logout logic
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
    setUserInfo(updatedUserInfo);
    localStorage.setItem(USER_INFO, JSON.stringify(updatedUserInfo));
  };




  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout ,userInfo,registerEvent}}>
      {children}
    </AuthContext.Provider>
  );
}
