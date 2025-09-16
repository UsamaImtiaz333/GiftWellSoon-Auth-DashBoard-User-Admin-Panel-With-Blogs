// src/hooks/useToast.ts
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ToastType = "success" | "error" | "info" | "warn";

export const useToast = () => {
  const showToast = (message: string, type: ToastType = "info") => {
    switch (type) {
      case "success":
        toast.success(message, { position: "top-right", autoClose: 3000 });
        break;
      case "error":
        toast.error(message, { position: "top-right", autoClose: 3000 });
        break;
      case "warn":
        toast.warn(message, { position: "top-right", autoClose: 3000 });
        break;
      default:
        toast.info(message, { position: "top-right", autoClose: 3000 });
    }
  };

  return { showToast };
};
