// import { useState } from "react";
// import { FaGift } from "react-icons/fa";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { signupSchema, type SignUpSchemaType } from "@/validation/SignUpSchema";
// import { useSignup } from "@/hooks/useSignup";
// import { useNavigate, Link } from "react-router-dom";

// const states = ["Punjab", "Sindh", "Balochistan", "KPK"];
// const cities: Record<string, string[]> = {
//   Punjab: ["Lahore", "Faisalabad", "Rawalpindi"],
//   Sindh: ["Karachi", "Hyderabad", "Sukkur"],
//   Balochistan: ["Quetta", "Gwadar"],
//   KPK: ["Peshawar", "Mardan"],
// };

// // ... imports same as pehle
// export default function SignUpForm() {
//   const navigate = useNavigate();
//   const { mutate, isPending } = useSignup();
//   const [selectedState, setSelectedState] = useState<string>("");

//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm<SignUpSchemaType>({
//     resolver: zodResolver(signupSchema),
//   });

//   const watchRole = watch("role"); // watch role select

//   const onSubmit = (data: SignUpSchemaType) => {
//     mutate(data, {
//       onSuccess: () => navigate("/login"),
//       onError: (error: any) => alert(error.response?.data?.message || "Signup failed"),
//     });
//   };

//   return (
//     <div className="min-h-screen bg-[#E7E2D9] flex flex-col items-center">
//       <header className="py-6">
//         <Link to="/" className="font-bold text-lg tracking-wide">GiftWellSoon</Link>
//       </header>

//       <div className="text-center mt-6">
//         <h2 className="text-3xl font-bold">Create Account</h2>
//         <p className="text-gray-600 mt-2">Fill in the details to create your account.</p>
//       </div>

//       <div className="bg-white rounded-2xl shadow-md mt-10 w-full max-w-lg p-8">
//         <div className="flex justify-center -mt-16">
//           <div className="w-20 h-20 rounded-full bg-[#F4E8DA] flex items-center justify-center text-3xl text-orange-500 shadow">
//             <FaGift />
//           </div>
//         </div>

//         <div className="text-center mt-4">
//           <h3 className="font-bold text-xl">Sign Up</h3>
//         </div>

//         <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
//           {/* Role */}
//           <div>
//             <label className="block text-gray-700">Select Role</label>
//             <select
//               {...register("role")}
//               className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
//             >
//               <option value="">-- Choose Role --</option>
//               <option value="user">User</option>
//               <option value="admin">Admin</option>
//             </select>
//             {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>}
//           </div>

//           {/* Conditional fields: Only show when role is selected */}
//           {watchRole && (
//             <>
//               {/* First & Last Name */}
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-gray-700">First Name</label>
//                   <input
//                     type="text"
//                     placeholder="First Name"
//                     {...register("firstName")}
//                     className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
//                   />
//                   {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
//                 </div>
//                 <div>
//                   <label className="block text-gray-700">Last Name</label>
//                   <input
//                     type="text"
//                     placeholder="Last Name"
//                     {...register("lastName")}
//                     className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
//                   />
//                   {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
//                 </div>
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="block text-gray-700">Email Address</label>
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   {...register("email")}
//                   className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
//                 />
//                 {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
//               </div>

//               {/* Password */}
//               <div>
//                 <label className="block text-gray-700">Password</label>
//                 <input
//                   type="password"
//                   placeholder="Enter your password"
//                   {...register("password")}
//                   className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
//                 />
//                 {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
//               </div>

//               {/* Confirm Password */}
//               <div>
//                 <label className="block text-gray-700">Confirm Password</label>
//                 <input
//                   type="password"
//                   placeholder="Re-enter your password"
//                   {...register("confirmPassword")}
//                   className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
//                 />
//                 {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
//               </div>

//               {/* User-specific fields */}
//               {watchRole === "user" && (
//                 <>
//                   <div>
//                     <label className="block text-gray-700">Address</label>
//                     <input
//                       type="text"
//                       placeholder="Address"
//                       {...register("address")}
//                       className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
//                     />
//                     {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
//                   </div>

//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-gray-700">State</label>
//                       <select
//                         {...register("state")}
//                         onChange={(e) => setSelectedState(e.target.value)}
//                         className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
//                       >
//                         <option value="">Select State</option>
//                         {states.map((s) => <option key={s} value={s}>{s}</option>)}
//                       </select>
//                       {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>}
//                     </div>
//                     <div>
//                       <label className="block text-gray-700">City</label>
//                       <select
//                         {...register("city")}
//                         className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
//                       >
//                         <option value="">Select City</option>
//                         {selectedState && cities[selectedState]?.map((city) => (
//                           <option key={city} value={city}>{city}</option>
//                         ))}
//                       </select>
//                       {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-gray-700">Mobile Number</label>
//                     <input
//                       type="text"
//                       placeholder="03001234567"
//                       {...register("number")}
//                       className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
//                     />
//                     {errors.number && <p className="text-red-500 text-sm mt-1">{errors.number.message}</p>}
//                   </div>
//                 </>
//               )}
//             </>
//           )}

//           {/* Submit */}
//           <div className="flex flex-row justify-between items-center mt-4">
//             <Link to="/login" className="text-blue-600 font-medium hover:underline">Already have an account?</Link>
//             <button
//               type="submit"
//               disabled={isPending}
//               className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
//             >
//               {isPending ? "Signing Up..." : "Sign Up"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { FaGift } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, type SignUpSchemaType } from "@/validation/SignUpSchema";
import { useSignup } from "@/hooks/useSignup";
import { useNavigate, Link } from "react-router-dom";

const states = ["Punjab", "Sindh", "Balochistan", "KPK"];
const cities: Record<string, string[]> = {
  Punjab: ["Lahore", "Faisalabad", "Rawalpindi"],
  Sindh: ["Karachi", "Hyderabad", "Sukkur"],
  Balochistan: ["Quetta", "Gwadar"],
  KPK: ["Peshawar", "Mardan"],
};

export default function SignUpForm() {
  const navigate = useNavigate();
  const { mutate, isPending } = useSignup();
  const [selectedState, setSelectedState] = useState<string>("");
  const [currentStep, setCurrentStep] = useState<number>(1);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(signupSchema),
  });

  const watchRole = watch("role"); // watch role select

  const onSubmit = (data: SignUpSchemaType) => {
    mutate(data, {
      onSuccess: () => navigate("/login"),
      onError: (error: any) => alert(error.response?.data?.message || "Signup failed"),
    });
  };

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  return (
    <div className="min-h-screen bg-[#E7E2D9] flex flex-col items-center">
      <header className="py-6">
        <Link to="/" className="font-bold text-lg tracking-wide">GiftWellSoon</Link>
      </header>

      <div className="text-center mt-6">
        <h2 className="text-3xl font-bold">Create Account</h2>
        <p className="text-gray-600 mt-2">Fill in the details to create your account.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-md mt-10 w-full max-w-lg p-8 relative">
        <div className="flex justify-center -mt-16">
          <div className="w-20 h-20 rounded-full bg-[#F4E8DA] flex items-center justify-center text-3xl text-orange-500 shadow">
            <FaGift />
          </div>
        </div>

        {/* Sign Up Heading + Step Counter */}
        <div className="text-center mt-4">
          <h3 className="font-bold text-xl">Sign Up</h3>
          <p className="text-gray-500 mt-1 text-sm">Step {currentStep} of 3</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          {/* Step 1: Role Selection */}
          {currentStep === 1 && (
            <div>
              <label className="block text-gray-700">Select Role</label>
              <select
                {...register("role")}
                className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300 relative z-10"
              >
                <option value="">-- Choose Role --</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
              {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>}

              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  disabled={!watchRole}
                  onClick={nextStep}
                  className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Basic Info */}
          {currentStep === 2 && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700">First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    {...register("firstName")}
                    className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                  />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                </div>
                <div>
                  <label className="block text-gray-700">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    {...register("lastName")}
                    className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                  />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email")}
                  className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  {...register("password")}
                  className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
              </div>

              <div>
                <label className="block text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Re-enter your password"
                  {...register("confirmPassword")}
                  className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                />
                {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
              </div>

              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-400 text-white px-5 py-2 rounded-md hover:bg-gray-500"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700"
                >
                  Next
                </button>
              </div>
            </>
          )}

          {/* Step 3: User-specific Info */}
          {currentStep === 3 && watchRole === "user" && (
            <>
              <div>
                <label className="block text-gray-700">Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  {...register("address")}
                  className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700">State</label>
                  <select
                    {...register("state")}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300 relative z-10"
                  >
                    <option value="">Select State</option>
                    {states.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>}
                </div>
                <div>
                  <label className="block text-gray-700">City</label>
                  <select
                    {...register("city")}
                    className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300 relative z-10"
                  >
                    <option value="">Select City</option>
                    {selectedState && cities[selectedState]?.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                  {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-gray-700">Mobile Number</label>
                <input
                  type="text"
                  placeholder="03001234567"
                  {...register("number")}
                  className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                />
                {errors.number && <p className="text-red-500 text-sm mt-1">{errors.number.message}</p>}
              </div>

              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-400 text-white px-5 py-2 rounded-md hover:bg-gray-500"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isPending}
                  className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
                >
                  {isPending ? "Signing Up..." : "Sign Up"}
                </button>
              </div>
            </>
          )}

          {/* If role is admin, final step is step 2 */}
          {currentStep === 3 && watchRole === "admin" && (
            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-400 text-white px-5 py-2 rounded-md hover:bg-gray-500"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={isPending}
                className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
              >
                {isPending ? "Signing Up..." : "Sign Up"}
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
