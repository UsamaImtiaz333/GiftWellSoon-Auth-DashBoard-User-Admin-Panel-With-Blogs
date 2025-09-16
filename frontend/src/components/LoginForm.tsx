  import { FaGift } from "react-icons/fa";
  import { Link } from "react-router-dom";
  import { useForm } from "react-hook-form";
  import { zodResolver } from "@hookform/resolvers/zod";
  import { loginSchema, type LoginSchemaType } from "@/validation/LoginFormSchema";
  import { useLogin } from "@/hooks/useLogin";

  export default function LoginForm() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<LoginSchemaType>({
      resolver: zodResolver(loginSchema),
    });

    const { mutate, isPending, error } = useLogin()
    const onSubmit = (data: LoginSchemaType) => {
      mutate(data); 
    };

    return (
      <div className="min-h-screen bg-[#E7E2D9] flex flex-col items-center">
        {/* Logo */}
        <header className="py-6">
          <Link to="/" className="font-bold text-lg tracking-wide">
            GiftWellSoon
          </Link>
        </header>

        {/* Heading */}
        <div className="text-center mt-6">
          <h2 className="text-3xl font-bold">Login</h2>
          <p className="text-gray-600 mt-2">Enter your credentials to continue.</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-md mt-10 w-full max-w-lg p-8">
          {/* Icon */}
          <div className="flex justify-center -mt-16">
            <div className="w-20 h-20 rounded-full bg-[#F4E8DA] flex items-center justify-center text-3xl text-orange-500 shadow">
              <FaGift />
            </div>
          </div>

          {/* Form Fields */}
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
            {/* Email */}
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                {...register("email")}
                className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                {...register("password")}
                className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* API Error */}
            {error && (
              <p className="text-red-500 text-sm mt-1">
                {(error as any).response?.data?.message || "Login failed"}
              </p>
            )}

            {/* Actions */}
            <div className="flex flex-row justify-between">
              <Link
                to="/signup"
                className="text-blue-600 font-medium hover:underline flex items-center gap-2"
              >
                Sign Up
              </Link>

              <button
                type="submit"
                disabled={isPending}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
              >
                {isPending ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
