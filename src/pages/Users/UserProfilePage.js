import React from 'react';


const UserProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div>
          <h2 className="text-3xl font-bold text-center">User Profile</h2>
          {/* Replace the below placeholders with user profile details */}
          <p className="mt-2 text-center text-gray-600">
            Welcome, [User's Name]!
          </p>
        </div>
        <div className="mt-8 space-y-6">
          {/* Sample user profile details */}
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter username"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter email address"
            />
          </div>
          {/* Add more user profile fields as needed */}
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
