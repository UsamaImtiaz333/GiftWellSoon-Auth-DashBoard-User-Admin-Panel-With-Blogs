import axios from "axios";
 
export type SignupPayload = {
  role: "user" | "admin";
  email: string;
  password: string;
  confirmPassword: string;
  firstName?: string;
  lastName?: string;
  address?: string;
  city?: string;
  state?: string;
  number?: string;
};

export const signupUser = async (data: SignupPayload) => {
  const response = await axios.post("http://localhost:3000/api/auth/signup", data);
  return response.data;
};
