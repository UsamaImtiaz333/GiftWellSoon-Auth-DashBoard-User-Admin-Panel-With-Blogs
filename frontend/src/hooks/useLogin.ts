// src/hooks/useLogin.ts
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "@/services/authApi/LoginApi";
import { useAuthStore } from "@/store/authStore";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/useToast"; // ✅ Toast hook import

export const useLogin = () => {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();
  const { showToast } = useToast(); // ✅ Toast function

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      console.log("Login Success:", data);
      localStorage.setItem("token", data.token);
      login(
        {
          fullName: data.user.fullName,
          firstName: data.user.firstName,
          email: data.user.email,
          role: data.user.role,
        },
        data.token
      );
      showToast("Login successful!", "success"); // ✅ Success toast
      navigate("/dashboard");
    },
    onError: (error: any) => {
      console.error("Login Failed:", error.response?.data || error.message);
      showToast(
        error.response?.data?.message || "Login failed!",
        "error"
      ); // ✅ Error toast
    },
  });
};
