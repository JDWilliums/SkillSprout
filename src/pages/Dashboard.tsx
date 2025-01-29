import React from 'react';
import Header from '../components/Header';
import DashboardGoals from '../components/DashboardGoals';
import RecentProgress from '../components/RecentProgress';
import WeakAreas from '../components/WeakAreas';

export default function Dashboard() {
  const userHasStats = true; // Replace with actual logic from user data

  return (
    

  
  <div>
    <div
      className="max-h-screen flex justify-center flex-1 px-4 sm:px-6 lg:px-8"
      style={{
        paddingTop: '4rem', // Ensure content starts below the sticky header
      }}
    >
      <div className="w-9/12 bg-white p-6 rounded shadow">
        <h1 className="text-3xl font-bold mb-6 text-center">Welcome to Your Dashboard</h1>

        <div
          className="
            grid gap-6 
            grid-cols-1       // Default: Single column on very small screens
            sm:grid-cols-2    // Two columns on small screens (≥640px)
            lg:grid-cols-3    // Three columns on large screens (≥1024px)
            flex-1 w-full"
        >
          {/* Today's Goals */}
          <div>
            <DashboardGoals />
          </div>

          {/* Recent Progress */}
          <div>
            {userHasStats ? (
              <RecentProgress />
            ) : (
              <div className="bg-gray-50 p-6 rounded shadow">
                <p className="text-gray-600">You haven't completed any tasks yet.</p>
                <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500">
                  Take Your First Lesson
                </button>
              </div>
            )}
          </div>

          {/* Weak Areas */}
          <div>
            <WeakAreas />
          </div>
        </div>
      </div>
    </div>
  </div>
    
  );
}
