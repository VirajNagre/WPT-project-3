// AuthContext.js
import React, { createContext, useState,useEffect } from 'react';
import { getToken } from '../../Services/userServices';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if token exists in local storage
    const token = getToken();
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);


  const login = () => {
    // Perform login logic
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Perform logout logic
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
