import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignInAdmin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    // Simulated credentials for demo purposes
    const adminCredentials = {
      username: 'David',
      password: '767879',
    };

    // Check if entered credentials match the simulated admin credentials
    if (username === adminCredentials.username && password === adminCredentials.password) {
      // Reset the form and any previous error messages upon successful login
      setUsername('');
      setPassword('');
      setError(null);

      // Redirect to the admin dashboard upon successful login
      navigate('/admin/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md w-80">
        <h2 className="text-2xl font-bold mb-6">Admin Sign In</h2>
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Admin Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Sign In
          </button>
        </form>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <p className="text-center mt-4">
          Use for Admin Only{' '}
          <Link to="/signup/admin" className="text-blue-500 hover:underline">
            Read Terms
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInAdmin;
