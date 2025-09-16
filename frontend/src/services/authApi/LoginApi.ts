import axios from "axios";
export const loginUser = async (data: { email: string; password: string }) => {
  const response = await axios.post("http://localhost:3000/api/auth/login", data);
  return response.data; 
};