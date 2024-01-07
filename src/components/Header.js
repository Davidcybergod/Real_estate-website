import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.svg';
import UserAuthService from '../auth/user/UserAuthService'; // Import the UserAuthService
import AdminAuthService from '../auth/admin/AdminAuthService'; // Import the AdminAuthService

const Header = () => {
  // Check authentication status for user and admin
  const isAuthenticatedAsUser = UserAuthService.isAuthenticated(); // Implement this function in UserAuthService
  const isAuthenticatedAsAdmin = AdminAuthService.isAuthenticated(); // Implement this function in AdminAuthService

  const handleLogoutUser = () => {
    UserAuthService.signOut(); // Implement signOut method in UserAuthService
    // Perform actions after user logout (e.g., redirect, update state)
  };

  const handleLogoutAdmin = () => {
    AdminAuthService.signOut(); // Implement signOut method in AdminAuthService
    // Perform actions after admin logout (e.g., redirect, update state)
  };

  return (
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/'> {/* Use Link component for navigation */}
          <img src={Logo} alt='Logo' />
        </Link>
        <div className='flex items-center gap-6'>
          {/* Conditionally render login/logout links based on user or admin authentication status */}
          {!isAuthenticatedAsUser && (
            <Link className='hover:text-violet-900 transition' to='/login/user'>Log In as User</Link>
          )}
          {!isAuthenticatedAsAdmin && (
            <Link className='hover:text-violet-900 transition' to='/login/admin'>Log In as Admin</Link>
          )}
          {/* Render logout links when authenticated */}
          {isAuthenticatedAsUser && (
            <Link className='hover:text-violet-900 transition' to='/logout/user' onClick={handleLogoutUser}>Log Out as User</Link>
          )}
          {isAuthenticatedAsAdmin && (
            <Link className='hover:text-violet-900 transition' to='/logout/admin' onClick={handleLogoutAdmin}>Log Out as Admin</Link>
          )}
          <Link className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition' to='/signup/user'>Sign Up</Link> {/* Link to the user sign-up page */}
        </div>
      </div>
    </header>
  );
};

export default Header;
