import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ closeModal }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", {
      email: formData.email,
      password: formData.password,
      remember: formData.remember,
    });
    closeModal();
  };

  const handleForgotPassword = () => {
    console.log("Forgot Password Clicked");
    // Uncomment below if route exists
    // navigate("/forgot-password");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[999] px-4">
      <div className="relative max-w-md w-full bg-white rounded-md shadow-lg p-6">
        {/* Close Button */}
        <button
          type="button"
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Login</h1>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Username or email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password *
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>

          {/* Remember Me & Forgot Password Row */}
          <div className="flex items-center justify-between mt-4">
            {/* Remember Me Checkbox */}
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                className="w-4 h-4 accent-blue-600 cursor-pointer"
              />
              <span className="text-sm text-gray-700">Remember me</span>
            </label>

            {/* Forgot Password Link */}
            <a
              href="/forget"
              type="button"
              onClick={handleForgotPassword}
              className="text-sm text-blue-600 hover:underline cursor-pointer"
            >
              Lost your password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-900 hover:bg-blue-950 text-white font-semibold py-3 px-4 rounded-lg transition-colors mt-6"
          >
            Login
          </button>

          {/* Sign Up Link */}
          <div className="text-center text-sm text-gray-600 mt-4">
            Don't have an account yet?{" "}
            <a
              href="/sign-up"
              type="button"
              onClick={handleSignUp}
              className="text-blue-600 font-medium hover:underline cursor-pointer"
            >
              Sign up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
