import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

export default function Dashboard() {
  const { logout } = useAuth(); // Access logout function
  const navigate = useNavigate(); // Navigate to login after logout

  const handleLogout = async () => {
    try {
      await logout(); // Clear the user session
      navigate('/login'); // Redirect to login page
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800">Welcome to the Dashboard</h2>
          <p className="mt-4 text-gray-600">
            Use the navigation above to explore the application.
          </p>
        </div>
      </main>
    </div>
  
  );
}
