import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import SignInUser from '../src/auth/user/SignInUser';
import SignInAdmin from '../src/auth/admin/SignInAdmin';
import AdminDashboardPage from './pages/Admin/AdminDashboardPage';
import AdminUsersPage from './pages/Admin/AdminUsersPage';
import AdminSettingsPage from './pages/Admin/AdminSettingsPage';
import UserProfilePage from './pages/Users/UserProfilePage';
import UserSettingsPage from './pages/Users/UserSettingsPage';
import HouseList from './components/HouseList';
import Search from './components/Search';

const App = () => {

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Property/:id" element={<PropertyDetails />} />

          {/* Route for User Login */}
          <Route path="/login/user" element={<SignInUser />} />

          {/* Route for Admin Login */}
          <Route
            path="/login/admin"
            element={<SignInAdmin />}
          />

          {/* Routes for Admin panel */}
          <Route
            path="/admin/dashboard"
            element={<AdminDashboardPage/>}
          />
          <Route
            path="/admin/users"
            element={<AdminUsersPage/>}
          />
          <Route
            path="/admin/settings"
            element={<AdminSettingsPage />}
          />

          {/* Routes for User panel */}
          <Route path="/user/profile" element={<UserProfilePage />} />
          <Route path="/user/settings" element={<UserSettingsPage />} />

          <Route path = "/search" element = {<Search/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
