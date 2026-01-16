import { useContext, createContext, useState, useEffect } from "react";
import api from "../api.js";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // console.log("useEffect runs");
    const fetchUser = async () => {
      const token = localStorage.getItem("token");

      // ✅ Only fetch if token exists
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await api.get("/auth/me");
        console.log("Detched user data", res.data.user);
        setUser(res.data.user);
      } catch (err) {
        console.error("Error fetching user data:", err);
        localStorage.removeItem("token"); // Remove invalid token
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const logoutUser = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, logoutUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
