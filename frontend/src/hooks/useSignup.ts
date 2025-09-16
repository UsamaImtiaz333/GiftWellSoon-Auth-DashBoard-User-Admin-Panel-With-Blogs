// frontend/src/hooks/useSignup.ts
import { useMutation } from "@tanstack/react-query";
import { signupUser, type SignupPayload } from "@/services/authApi/SignUpApi";
import { useToast } from "@/hooks/useToast"; // ✅ Toast hook import

export function useSignup() {
  const { showToast } = useToast(); // ✅ Toast function

  return useMutation({
    mutationFn: (data: SignupPayload) => signupUser(data),
    onSuccess: (data) => {
      console.log("✅ Signup successful:", data);
      showToast("Signup successful!", "success"); // ✅ Success toast
    },
    onError: (error: any) => {
      console.error("❌ Signup failed:", error);
      showToast(
        error.response?.data?.message || "Signup failed",
        "error"
      ); // ✅ Error toast
    },
  });
}
