import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken, removeToken] = useLocalStorage("authToken", null);
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  const login = async (data) => {
    try {
      const response = await axios.post("/api/auth/login", data);
      const { token, user } = response.data;
      setToken(token);
      setUser(user);
      navigate("/profile");
    } catch (error) {
      console.error("Login error", error);
      throw new Error("Invalid username or password");
    }
  };

  const logout = () => {
    removeToken();
    setUser(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      token,
      login,
      logout,
    }),
    [user, token]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
