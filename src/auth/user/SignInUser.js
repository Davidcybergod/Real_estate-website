import React from 'react';

const SignInUser = () => {
  const handleSignIn = (e) => {
    e.preventDefault();
    // Logic to handle user sign-in (e.g., API calls, form submission, etc.)
    // Upon successful sign-in, perform necessary actions (e.g., store session)
    console.log('User signed in');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md w-80">
        <h2 className="text-2xl font-bold mb-6">User Sign In</h2>
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInUser;
