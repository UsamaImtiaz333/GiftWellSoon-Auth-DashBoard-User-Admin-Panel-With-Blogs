// services/userApi.ts
import axios from "axios";

export const getAllUsers = async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get("http://localhost:3000/api/users", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
