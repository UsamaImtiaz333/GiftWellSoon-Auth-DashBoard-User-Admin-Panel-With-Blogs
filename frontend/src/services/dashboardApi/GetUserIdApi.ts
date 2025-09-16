import axios from "axios";

export const getUserById = async (id: string) => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`http://localhost:3000/api/users/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
