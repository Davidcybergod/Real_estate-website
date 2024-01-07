import React, { useState } from 'react';

const UserSettingsPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSaveChanges = () => {
    // Simulate updating user settings (Replace this with actual API call)
    if (fullName && email) {
      setSuccessMessage('Settings updated successfully!');
      setErrorMessage('');
      // Perform actions (e.g., update settings in the database)
    } else {
      setSuccessMessage('');
      setErrorMessage('Please fill in all fields.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div>
          <h2 className="text-3xl font-bold text-center">User Settings</h2>
          <p className="mt-2 text-center text-gray-600">
            Personalize your account settings here.
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="fullName">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        {successMessage && (
          <p className="text-green-600 text-center">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="text-red-600 text-center">{errorMessage}</p>
        )}
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            onClick={handleSaveChanges}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserSettingsPage;
