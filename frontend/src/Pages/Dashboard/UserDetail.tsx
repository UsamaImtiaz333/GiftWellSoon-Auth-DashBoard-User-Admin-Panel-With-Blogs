import { useUser } from "@/hooks/Dashboard/GetUserId";
import { useParams } from "react-router-dom";

export default function UserDetail() {
  const { id } = useParams();
  const { data: user, isLoading, error } = useUser(id!);

  if (isLoading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 py-10">Error loading user</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-xl mt-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">{user.firstName}</h2>
      <p className="text-gray-600">
        <span className="font-semibold">Last Name:</span> {user.lastName}
      </p>
            <p className="text-gray-600">
        <span className="font-semibold">Number:</span> {user.number}
      </p>
            <p className="text-gray-600">
        <span className="font-semibold">State:</span> {user.state}
      </p>
            <p className="text-gray-600">
        <span className="font-semibold">City:</span> {user.city}
      </p>
            <p className="text-gray-600">
        <span className="font-semibold">Address:</span> {user.address}
      </p>
            <p className="text-gray-600">
        <span className="font-semibold">Role:</span> {user.role}
      </p>
    </div>
  );
}
