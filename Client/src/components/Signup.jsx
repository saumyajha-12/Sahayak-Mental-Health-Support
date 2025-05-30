import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const VolunteerSignup = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault(); // Prevents form reload

    // Here, you can add validation or send data to backend

    // After success, navigate to home page
    navigate('/');
  };

  return (
     <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 px-4">
      
      {/* Greeting Outside the Card */}
      <h1 className="text-xl font-semibold text-white mb-4">HELLO FRIEND</h1>

      {/* Signup Card */}
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">

        {/* Title */}
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">Sign Up</h2>

        <form onSubmit={handleSignup}>
          {/* Name */}
          <div className="flex items-center bg-purple-100 rounded-full px-4 py-2 mb-4 shadow-md">
            <span className="text-purple-600 mr-3">
              <i className="fas fa-user"></i>
            </span>
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent flex-1 outline-none text-gray-700"
              required
            />
          </div>

          {/* Age */}
          <div className="flex items-center bg-purple-100 rounded-full px-4 py-2 mb-4 shadow-md">
            <span className="text-purple-600 mr-3">
              <i className="fas fa-birthday-cake"></i>
            </span>
            <input
              type="number"
              placeholder="Age"
              className="bg-transparent flex-1 outline-none text-gray-700"
              required
            />
          </div>

          {/* Email */}
          <div className="flex items-center bg-purple-100 rounded-full px-4 py-2 mb-4 shadow-md">
            <span className="text-purple-600 mr-3">
              <i className="fas fa-envelope"></i>
            </span>
            <input
              type="email"
              placeholder="E-mail"
              className="bg-transparent flex-1 outline-none text-gray-700"
              required
            />
          </div>

          {/* Password */}
          <div className="flex items-center bg-purple-100 rounded-full px-4 py-2 mb-4 shadow-md">
            <span className="text-purple-600 mr-3">
              <i className="fas fa-lock"></i>
            </span>
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent flex-1 outline-none text-gray-700"
              required
            />
            <i className="fas fa-eye text-purple-600 ml-2 cursor-pointer"></i>
          </div>

          {/* Terms */}
          <div className="flex items-center mb-4 text-sm">
            <input type="checkbox" id="terms" className="mr-2" required />
            <label htmlFor="terms" className="text-gray-600">
              I read and agree to <span className="text-purple-600 cursor-pointer underline">Terms & Conditions</span>
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 shadow-lg transition"
          >
            CREATE ACCOUNT
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-purple-600 underline">
            Sign in
          </Link>
        </p>
        
        

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-purple-500 font-medium">
          Thanks to believe on team <span className="font-bold">Sahayak</span>
        </p>
      </div>
    </div>
  );
};

export default VolunteerSignup;
