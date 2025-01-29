import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header'; // Import your Header component

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 w-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-1 pt-16 px-4 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
