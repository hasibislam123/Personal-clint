import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash, FaRegEnvelope, FaLock, FaUser, FaLink } from "react-icons/fa"; 
import toast from "react-hot-toast";
import loginBanner from "../../assets/loginBanner1.png";

const Register = () => {
  const { createUser, googleSignIn, updateUserProfile, setUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); 
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;

    try {
      const result = await createUser(email, password);
      
     
      await updateUserProfile({
        displayName: name,
        photoURL: photoURL,
      });

      // Context 
      setUser({
        ...result.user,
        displayName: name,
        photoURL: photoURL,
      });

      toast.success("Registration successful!");
      
      navigate("/", { replace: true });
      
    } catch (err) {
      setError(err.message);
      toast.error(err.message || "Registration failed!");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const googleUser = await googleSignIn();
      setUser(googleUser.user);
      toast.success("Signed in with Google!");
      
      navigate("/", { replace: true });
      
    } catch (err) {
      setError(err.message);
      toast.error("Google Sign-in failed!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center p-0 sm:p-4">
      <div className="bg-white rounded-[32px] shadow-xl flex flex-col md:flex-row w-full max-w-6xl overflow-hidden min-h-[700px]">
        
        <div className="w-full md:w-1/2 p-4 sm:p-8 lg:p-14 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-8">
            <div className="grid grid-cols-3 gap-1">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-black rounded-full"></div>
              ))}
            </div>
            <h1 className="text-2xl font-bold text-gray-800">FinEase</h1>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-2">Create an Account</h2>
          <p className="text-gray-500 mb-8">Join us and start managing your finances.</p>

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><FaUser /></span>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#8bc8fd] focus:ring-1 focus:ring-[#1e88e5] outline-none transition"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email address</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><FaRegEnvelope /></span>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#8bc8fd] focus:ring-1 focus:ring-[#1e88e5] outline-none transition"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Photo URL (optional)</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><FaLink /></span>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="https://example.com/photo.jpg"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#8bc8fd] focus:ring-1 focus:ring-[#1e88e5] outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Password</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><FaLock /></span>
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

            <button
              type="submit"
              className="w-full bg-[#1e88e5] hover:bg-[#0185f8] text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-100 transition duration-300 mt-2"
            >
              Sign Up
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-200"></div>
            <span className="px-3 text-gray-400 text-sm">OR</span>
            <div className="flex-grow h-px bg-gray-200"></div>
          </div>

          <button
            onClick={handleGoogleLogin}
            type="button"
            className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-50 transition duration-300 shadow-sm"
          >
            <FcGoogle size={22} /> Continue with Google
          </button>

          {error && <p className="text-red-500 text-sm mt-4 text-center font-medium">{error}</p>}

          <p className="mt-6 text-center text-gray-600">
            Already have an account?
            <Link to="/login" className="text-[#1e88e5] font-bold hover:underline ml-1"> Login</Link>
          </p>
        </div>

        <div className="hidden md:block w-1/2 bg-[#1e88e5] relative">
          <img 
            src={loginBanner} 
            alt="Registration Banner" 
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default Register;