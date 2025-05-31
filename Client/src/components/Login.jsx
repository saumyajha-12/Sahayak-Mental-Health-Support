import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add validation or API call here if needed
    navigate('/logedIn'); // Navigate to Page2 on login
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 px-4">
      
      {/* Top Greeting */}
      <h1 className="text-white text-2xl font-semibold mb-6">Hello Dear Friend</h1>

      {/* Login Card */}
      <div className="bg-white rounded-xl shadow-xl px-10 py-8 w-full max-w-sm">
        <h2 className="text-3xl font-bold text-center text-black mb-6">Login</h2>

        {/* Username Input */}
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">Username</label>
          <div className="flex items-center border-b border-gray-300 py-2">
            <span className="text-gray-400 mr-2">👤</span>
            <input
              type="text"
              placeholder="Type your username"
              className="w-full outline-none text-sm text-gray-700 bg-transparent"
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">Password</label>
          <div className="flex items-center border-b border-gray-300 py-2">
            <span className="text-gray-400 mr-2">🔒</span>
            <input
              type="password"
              placeholder="Type your password"
              className="w-full outline-none text-sm text-gray-700 bg-transparent"
            />
          </div>
        </div>

        {/* Forgot Password */}
        <div className="text-right text-sm text-purple-600 mb-6 cursor-pointer hover:underline">
          Forgot password?
        </div>

        {/* Login Button */}
        <button
          className="w-full py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-md hover:opacity-90 transition"
          onClick={handleLogin}
        >
          LOGIN
        </button>

        {/* Social Login */}
        <div className="my-6 text-center text-gray-500 text-sm">Or Sign Up Using</div>
        <div className="flex justify-center space-x-4 mb-6">
          <button className="bg-blue-600 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">f</button>
          <button className="bg-sky-400 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">t</button>
          <button className="bg-red-500 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">G</button>
        </div>

        {/* Sign Up */}
        <div className="text-center text-sm text-gray-500">
          Or Sign Up Using{' '}
          <span
            className="text-purple-600 cursor-pointer hover:underline"
            onClick={() => navigate('/register')}
          >
            SIGN UP
          </span>
        </div>
      </div>

      {/* Bottom Message */}
      <p className="mt-6 text-white text-sm italic">We are love to help you again 💗</p>
    </div>
  );
};

export default Login;
