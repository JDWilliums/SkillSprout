import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function DashboardGoals() {
  const progress = 75; // Replace with actual data

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Today's Goals</h2>
      <div className="flex items-center justify-center mb-6">
        <div className="w-32 h-32 md:w-48 md:h-48">
          <CircularProgressbar
            value={progress}
            text={`${progress}%`}
            styles={buildStyles({
              textColor: '#4F46E5',
              pathColor: '#4F46E5',
              trailColor: '#E5E7EB',
            })}
          />
        </div>
      </div>
      <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500">
        Start Activity
      </button>
    </div>
  );
}
