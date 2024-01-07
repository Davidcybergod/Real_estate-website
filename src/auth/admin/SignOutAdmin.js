// SignOutAdmin.js

import React from 'react';

const SignOutAdmin = () => {
  // Handle admin sign-out logic here
  
  const handleSignOut = () => {
    // Logic to handle admin sign-out (e.g., clearing sessions, etc.)
    console.log('Admin signed out');
    // Perform actions after successful sign-out
  };

  return (
    <div>
      <h2>Admin Sign Out</h2>
      {/* Sign-out button */}
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default SignOutAdmin;
