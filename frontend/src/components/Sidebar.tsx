import { Link } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";

const Sidebar = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold mb-6 text-center">Dashboard</h2>

      {/* Line with text in the middle */}
      <div className="relative flex items-center justify-center mb-6">
        <hr className="absolute w-full border-gray-600" />
      </div>

      {/* Links */}
      <ul className="space-y-4">
        {/* Common link for both roles */}
        <li>
          <Link to="/dashboard" className="hover:text-gray-400">
            Dashboard
          </Link>
        </li>

        {/* Role-based conditional rendering */}
        {user?.role === "admin" ? (
          <>
            {/* Only for Admin */}
            <li>
              <Link to="/dashboard/user" className="hover:text-gray-400">
                User
              </Link>
            </li>
            <li>
              <Link to="/dashboard/blogs" className="hover:text-gray-400">
                Blogs
              </Link>
            </li>
          </>
        ) : (
          <>
            {/* Only for Normal User */}
            <li>
              <Link to="/dashboard/friends" className="hover:text-gray-400">
                Friends
              </Link>
            </li>
            <li>
              <Link to="/dashboard/explore" className="hover:text-gray-400">
                Explore
              </Link>
            </li>
            <li>
              <Link to="/dashboard/search" className="hover:text-gray-400">
                Search
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
