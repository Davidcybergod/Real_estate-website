import React from 'react';

const AdminSettingsPage = () => {
  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <h2 className="text-3xl font-bold mb-6">Admin Settings Page</h2>
      <div className="flex flex-col space-y-6">
        {/* First settings section */}
        <div className="border-b pb-4">
          <h3 className="text-xl font-semibold mb-2">Settings Section 1</h3>
          <div className="flex flex-col space-y-4">
            {/* Example settings content */}
            <div className="flex items-center space-x-4">
              <label className="w-1/4">Setting 1:</label>
              <input
                type="text"
                className="border rounded-md py-1 px-2 w-3/4 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="w-1/4">Setting 2:</label>
              <input
                type="text"
                className="border rounded-md py-1 px-2 w-3/4 focus:outline-none focus:border-blue-500"
              />
            </div>
            {/* Add more settings content */}
          </div>
        </div>

        {/* Second settings section */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Settings Section 2</h3>
          <div className="flex flex-col space-y-4">
            {/* Additional settings content */}
            <div className="flex items-center space-x-4">
              <label className="w-1/4">Setting 3:</label>
              <input
                type="text"
                className="border rounded-md py-1 px-2 w-3/4 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="w-1/4">Setting 4:</label>
              <input
                type="text"
                className="border rounded-md py-1 px-2 w-3/4 focus:outline-none focus:border-blue-500"
              />
            </div>
            {/* Add more settings content */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettingsPage;
