import React from 'react';

export default function RecentProgress() {
  const recentTasks = [
    { name: 'Math Quiz', reward: '5 Points' },
    { name: 'Science Lesson', reward: '10 Points' },
    { name: 'History Assignment', reward: '8 Points' },
  ];

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Recent Progress</h2>
      <ul className="space-y-4">
        {recentTasks.map((task, index) => (
          <li key={index} className="flex justify-between">
            <span>{task.name}</span>
            <span className="text-gray-500">{task.reward}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
