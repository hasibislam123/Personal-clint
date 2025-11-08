import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router"; 
import { AuthContext } from "../../Contexts/AuthContext";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, googleSignIn, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // 📩 Handle Registration with Email & Password
  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;

    try {
      // 1️⃣ Firebase createUserWithEmailAndPassword
      const result = await createUser(email, password);

      // 2️⃣ Update user profile
      await updateUserProfile({
        displayName: name,
        photoURL: photoURL,
      });

      toast.success("Registration successful! 🎉");
      console.log("User registered:", result.user);
      navigate("/"); // redirect to homepage
    } catch (err) {
      console.error(err);
      setError(err.message);
      toast.error("Registration failed!");
    }
  };

  // 🌐 Handle Google Sign-In
  const handleGoogleLogin = async () => {
    try {
      await googleSignIn();
      toast.success("Signed in with Google!");
      navigate("/");
    } catch (err) {
      setError(err.message);
      toast.error("Google Sign-in failed!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      <div className="backdrop-blur-md bg-white/10 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/20">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Create an Account</h2>

        {/* 🧾 Register Form */}
        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
            required
          />
          <input
            type="text"
            name="photoURL"
            placeholder="Photo URL (optional)"
            className="px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
            required
          />
          <button
            type="submit"
            className="mt-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            Sign Up
          </button>
        </form>

        {error && <p className="text-red-300 text-sm mt-2 text-center">{error}</p>}

        <p className="text-center text-gray-200 mt-4">
          Already have an account?
          <Link to="/login" className="text-yellow-300 hover:underline ml-1">
            Login
          </Link>
        </p>

        <div className="flex items-center my-5">
          <div className="flex-grow h-px bg-white/30"></div>
          <span className="px-3 text-gray-200 text-sm">OR</span>
          <div className="flex-grow h-px bg-white/30"></div>
        </div>

        {/* 🌍 Google Sign-in Button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 bg-white text-gray-700 font-medium py-3 rounded-lg hover:bg-gray-100 transition"
        >
          <FcGoogle size={22} /> Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
