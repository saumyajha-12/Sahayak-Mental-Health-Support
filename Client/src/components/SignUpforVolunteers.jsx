import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const VolunteerSignup = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // TODO: Add form validation / data submission logic here if needed

    // Redirect to homepage
    navigate('/');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left: Signup Form */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="p-10 rounded-3xl shadow-2xl w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Volunteer Sign Up</h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 mt-1 border rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Age</label>
              <input
                type="number"
                placeholder="Enter your age"
                className="w-full px-4 py-2 mt-1 border rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 mt-1 border rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Create a password"
                className="w-full px-4 py-2 mt-1 border rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Occupation</label>
              <input
                type="text"
                placeholder="Your current occupation"
                className="w-full px-4 py-2 mt-1 border rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Sign Up as Volunteer
            </button>
          </form>

          <p className="text-sm text-center mt-6 text-gray-600">
         Already registered? <Link to="/login" className="text-purple-600 font-medium">Login here</Link>
         </p>

        </div>
      </div>

      {/* Right: Image + Message */}
      <div className="w-1/2 relative flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400">
        <img
          src="/your-image-path.jpg"
          alt="Thank you"
          className="absolute inset-0 object-cover w-full h-full opacity-30"
        />
        <div className="relative z-10 text-center text-white p-10 max-w-md">
          <h2 className="text-4xl font-bold mb-4">THANKS TO SIGN UP</h2>
          <p className="text-lg font-medium">
            AS A VOLUNTEER TO HELP OTHERS WITH US
          </p>
        </div>
      </div>
    </div>
  );
};

export default VolunteerSignup;
