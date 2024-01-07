import React, { useState, useEffect } from 'react';
import { fetchStatistics, fetchPropertyListings } from '../Admin/api/api';
import { useNavigate } from 'react-router-dom';

const AdminDashboardPage = () => {
  const [statistics, setStatistics] = useState({});
  const [propertyListings, setPropertyListings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulated login for demonstration purposes
    const adminLogin = async () => {
      try {
        // Simulate admin authentication logic here
        const authenticated = true; // Replace with your actual authentication logic

        if (authenticated) {
          const stats = await fetchStatistics();
          setStatistics(stats);

          const listings = await fetchPropertyListings();
          setPropertyListings(listings);
        } else {
          navigate('/login/admin');
        }
      } catch (error) {
        console.error('Error during admin login:', error);
        // Handle errors or redirect to error page
      }
    };

    adminLogin();
  }, [navigate]);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Display fetched statistics and property listings */}
      <div className="bg-white p-6 rounded-md shadow-md">
        <h3 className="text-xl font-semibold mb-4">Statistics</h3>
        <p className="text-gray-600">Total users: {statistics.totalUsers}</p>
        <p className="text-gray-600">Total properties: {statistics.totalProperties}</p>
        {/* Display more statistics */}
      </div>

      <div className="bg-white p-6 rounded-md shadow-md">
        <h3 className="text-xl font-semibold mb-4">Property Listings</h3>
        {propertyListings.map((property, index) => (
          <div key={index} className="flex items-center justify-between border-b py-2">
            <p className="text-gray-700">{property.name}</p>
            <button className="text-sm text-blue-500 hover:text-blue-700">View Details</button>
          </div>
        ))}
        {/* Add more property listings */}
      </div>
    </div>
  );
};

export default AdminDashboardPage;
