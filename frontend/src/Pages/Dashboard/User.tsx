import { useUsers } from "@/hooks/useUsers";
import { Link } from "react-router-dom";

export default function User() {
  const { data: users, isLoading, error } = useUsers();

  if (isLoading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 py-10">Error loading users</p>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">All Users</h2>

      <div className="overflow-x-auto shadow-md rounded-2xl">
        <table className="w-full border-collapse bg-white rounded-2xl">
          <thead>
            <tr className="bg-gradient-to-r from-green-400 to-blue-500 text-white">
              <th className="p-4 text-left">Full Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Role</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user: any, index: number) => (
              <tr
                key={user._id}
                className={`transition-colors ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100`}
              >
                <td className="p-4 font-medium text-gray-700">{user.fullName}</td>
                <td className="p-4 text-gray-600">{user.email}</td>
                <td className="p-4 text-gray-600">{user.role}</td>
                <td className="p-4">
                  <Link
                    to={`/dashboard/user/${user._id}`}
                    className="text-blue-600 hover:underline"
                  >
                    View Detail
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
