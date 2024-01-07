// api/api.js

// Simulated statistics data
const statisticsData = {
  totalUsers: 100,
  totalProperties: 250,
  // Add more statistics here
};

// Simulated property listings data
const propertyListingsData = [
  { id: 1, name: 'Property 1' },
  { id: 2, name: 'Property 2' },
  // Add more property listings here
];

// Simulated fetchStatistics function
export const fetchStatistics = () => {
  return new Promise((resolve) => {
    // Simulate an API call delay (e.g., 1 second delay)
    setTimeout(() => {
      resolve(statisticsData);
    }, 1000);
  });
};

// Simulated fetchPropertyListings function
export const fetchPropertyListings = () => {
  return new Promise((resolve) => {
    // Simulate an API call delay (e.g., 1 second delay)
    setTimeout(() => {
      resolve(propertyListingsData);
    }, 1000);
  });
};
