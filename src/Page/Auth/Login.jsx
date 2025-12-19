import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { FaEye, FaEyeSlash, FaRegEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Contexts/AuthContext";
import toast from "react-hot-toast";
import loginBanner from "../../assets/loginBanner1.png";

const Login = () => {
   const { signInUser, googleSignIn } = useContext(AuthContext); 
   const [error, setError] = useState("");
   const [showPassword, setShowPassword] = useState(false);
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || "/";

   const handleLogin = async (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;

      try {
         await signInUser(email, password);
         toast.success("Login successful!");
         navigate(from, { replace: true });
      } catch (err) {
         setError(err.message);
         toast.error("Invalid email or password!");
      }
   };

   // Google Login Handler
   const handleGoogleLogin = async () => {
      try {
         await googleSignIn();
         toast.success("Logged in with Google!");
         navigate(from, { replace: true });
      } catch (err) {
         setError(err.message);
         toast.error("Google sign-in failed!");
      }
   };

   return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center p-0 sm:p-10">
         {/* Main Container */}
         <div className="bg-white rounded-[32px] shadow-xl flex flex-col md:flex-row w-full max-w-5xl overflow-hidden min-h-[600px]">

            {/* Left Side: Form */}
            <div className="w-full md:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
               <div className="flex items-center gap-2 mb-10">
                  <div className="grid grid-cols-3 gap-1">
                     {[...Array(9)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 bg-black rounded-full"></div>
                     ))}
                  </div>
                  <h1 className="text-2xl font-bold text-gray-800">FinEase</h1>
               </div>

               <h2 className="text-3xl font-bold text-gray-900 mb-2">Login to Your Account</h2>
               <p className="text-gray-500 mb-8">Please enter your login details.</p>

               <form onSubmit={handleLogin} className="space-y-5">
                  {/* Email Field */}
                  <div>
                     <label className="block text-sm font-semibold text-gray-700 mb-2">Email address</label>
                     <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                           <FaRegEnvelope />
                        </span>
                        <input
                           type="email"
                           name="email"
                           placeholder="Email address"
                           className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#8bc8fd] focus:ring-1 focus:ring-[#1e88e5] outline-none transition"
                           required
                        />
                     </div>
                  </div>

                  {/* Password Field */}
                  <div>
                     <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                     <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                           <FaLock />
                        </span>
                        <input
                           type={showPassword ? "text" : "password"}
                           name="password"
                           placeholder="Password"
                           className="w-full pl-12 pr-12 py-3 rounded-xl border border-gray-200 focus:border-[#8bc8fd] focus:ring-1 focus:ring-[#1e88e5] outline-none transition"
                           required
                        />
                        <button
                           type="button"
                           onClick={() => setShowPassword(!showPassword)}
                           className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                           {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                     </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                     <label className="flex items-center gap-2 cursor-pointer text-gray-600">
                        <input type="checkbox" className="rounded border-gray-300 text-[#1e88e5] focus:ring-[#1e88e5]" />
                        Remember me
                     </label>
                     <Link to="#" className="text-[#1e88e5] font-semibold hover:underline">Forgot password?</Link>
                  </div>

                  <button
                     type="submit"
                     className="w-full bg-[#1e88e5] hover:bg-[#0185f8] text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-100 transition duration-300"
                  >
                     Sign in
                  </button>
               </form>

               {/* Divider */}
               <div className="flex items-center my-6">
                  <div className="flex-grow h-px bg-gray-200"></div>
                  <span className="px-3 text-gray-400 text-sm">OR</span>
                  <div className="flex-grow h-px bg-gray-200"></div>
               </div>

               {/* Google Login Button */}
               <button
                  onClick={handleGoogleLogin}
                  type="button"
                  className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-50 transition duration-300 shadow-sm"
               >
                  <FcGoogle size={22} /> Continue with Google
               </button>

               {error && <p className="text-red-500 text-sm mt-4 text-center font-medium">{error}</p>}

               <p className="mt-8 text-center text-gray-600">
                  Don't have an account?
                  <Link to="/register" className="text-[#1e88e5] font-bold hover:underline ml-1"> Register</Link>
               </p>
            </div>

            {/* Right Side: Banner */}
            <div className="hidden md:block w-1/2 bg-[#1e88e5] relative">
               <img src={loginBanner} alt="Banner" className="w-full h-full object-cover" />
            </div>

         </div>
      </div>
   );
};

export default Login;