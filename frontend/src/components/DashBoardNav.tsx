import { useAuthStore } from "@/store/authStore";
import { useNavigate } from "react-router-dom";

function DashBoardNav() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // reset state + clear storage
    navigate("/"); // ✅ redirect to home
  };
  console.log(user);
  return (
    <div className="w-full h-14 bg-gray-900 text-white flex items-center justify-between px-6 shadow-md">
      <h1 className="text-lg font-bold">Dashboard</h1>

      <div className="flex items-center space-x-3">
        <span className="font-medium">
          Welcome, {user?.fullName || user?.firstName || "Guest"}
        </span>
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="w-10 h-10 rounded-full border-2 border-gray-700"
        />
      </div>

      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default DashBoardNav;
