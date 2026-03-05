import React, { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import TopHeading from "./TopHeading";

const SignupPage = () => {
  // Login State
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  // Register State
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);

  // Handle Login Submit
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login attempt:", {
      email: loginEmail,
      password: loginPassword,
      remember: remember,
    });
  };

  // Handle Register Submit
  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Register attempt:", {
      username: username,
      email: email,
      password: registerPassword,
    });
  };

  return (
    <>
      <TopHeading />
      <div className="min-h-screen  py-12 px-4">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* LEFT SIDE - LOGIN */}
          <div className="bg-white p-6 rounded border shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Login</h2>

            <form onSubmit={handleLogin} className="space-y-4">
              {/* Email/Username Input */}
              <div>
                <label
                  htmlFor="loginEmail"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Username or email address{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="loginEmail"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Password Input with Toggle */}
              <div>
                <label
                  htmlFor="loginPassword"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showLoginPassword ? "text" : "password"}
                    id="loginPassword"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowLoginPassword(!showLoginPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showLoginPassword ? (
                      <IoEyeOffOutline className="w-5 h-5" />
                    ) : (
                      <IoEyeOutline className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me and Login Button Row */}
              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  className="bg-blue-900 text-white px-5 py-2 rounded hover:opacity-90 transition"
                >
                  Log In
                </button>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={() => setRemember(!remember)}
                    className="w-4 h-4 accent-blue-600 cursor-pointer"
                  />
                  <span className="text-sm text-gray-700">Remember me</span>
                </label>
              </div>

              {/* Forgot Password Link */}
              <div>
                <a
                  href="/forget"
                  className="text-blue-700 text-sm hover:underline cursor-pointer"
                >
                  Lost your password?
                </a>
              </div>
            </form>
          </div>

          {/* RIGHT SIDE - REGISTER */}
          <div className="bg-white p-6 rounded border shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Register</h2>

            <form onSubmit={handleRegister} className="space-y-4">
              {/* Username Input */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Username <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Password Input with Toggle */}
              <div>
                <label
                  htmlFor="registerPassword"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showRegisterPassword ? "text" : "password"}
                    id="registerPassword"
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShowRegisterPassword(!showRegisterPassword)
                    }
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showRegisterPassword ? (
                      <IoEyeOffOutline className="w-5 h-5" />
                    ) : (
                      <IoEyeOutline className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Privacy Policy Text */}
              <div className="text-sm text-gray-600 leading-relaxed">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <a href="#" className="text-blue-700 hover:underline">
                  privacy policy
                </a>
                .
              </div>

              {/* Register Button */}
              <button
                type="submit"
                className="bg-blue-900 text-white px-5 py-2 rounded hover:opacity-90 transition"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
