import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [user, setUser] = useState(null);

  const verifyAuth = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:3002/verify",
        {},
        {withCredentials: true}
      );

      if (data?.status) {
        setIsAuthenticated(true);
        setUser(data?.user || null);
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    } catch (error) {
      setIsAuthenticated(false);
      setUser(null);
    } finally {
      setAuthLoading(false);
    }
  };

  useEffect(() => {
    verifyAuth();
  }, []);

  const markLoggedIn = (username = null) => {
    setIsAuthenticated(true);
    if (username) setUser(username);
  };

  const logout = async () => {
    await axios.post("http://localhost:3002/logout", {}, { withCredentials: true });
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authLoading,
        user,
        verifyAuth,
        markLoggedIn,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
};
