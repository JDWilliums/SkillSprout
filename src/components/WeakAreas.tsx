import React from 'react';

export default function WeakAreas() {
  const weakSubjects = ['Math', 'Science', 'English']; // Replace with real data

  return (
    <div className="bg-white p-6 rounded shadow min-h-1/12 max-h-1/12">
      <h2 className="text-xl font-bold mb-4">Weak Areas</h2>
      {weakSubjects.length > 0 ? (
        <ul className="space-y-2">
          {weakSubjects.map((subject, index) => (
            <li key={index} className="flex justify-between">
              <span>{subject}</span>
              <button className="text-indigo-600 hover:underline">Practice</button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">You're doing great! No weak areas detected.</p>
      )}
    </div>
  );
}
