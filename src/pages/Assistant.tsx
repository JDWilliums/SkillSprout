import React, { useState } from 'react';

export default function HomeworkHelper() {
  const [question, setQuestion] = useState<string>('');
  const [response, setResponse] = useState<string>('');
  const [hints, setHints] = useState<string[]>([]); // Explicitly define the type as string[]
  const [avatarMessage, setAvatarMessage] = useState<string>('Hi! I’m here to help you with your questions.');

  const handleQuestionSubmit = async () => {
    if (!question) return;

    // Simulate ChatGPT API call (Replace with real API later)
    const simulatedResponse = `Let’s break this down: Here’s the solution for "${question}"...`;
    setResponse(simulatedResponse);
    setHints([
      'Step 1: Identify the key elements of the question.',
      'Step 2: Apply the relevant concepts or equations.',
      'Step 3: Solve step by step.',
    ]);
    setAvatarMessage('You’re doing great! Follow the steps to complete the solution.');
  };

  return (
    
    <div className="flex flex-col items-center bg-gray-100 min-h-screen"
    style={{
      paddingTop: '4rem', // Ensure content starts below the sticky header
    }}>
      {/* Page Title */}
      <h1 className="text-3xl font-bold mt-6 mb-4">Homework Helper</h1>

      {/* Input Section */}
      <div className="w-10/12 max-w-4xl bg-white p-6 rounded shadow">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your question here..."
          className="w-full p-4 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={handleQuestionSubmit}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500"
          >
            Submit Question
          </button>
          <div className="flex gap-2">
            <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">Upload File</button>
            <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">Record Voice</button>
          </div>
        </div>
      </div>

      {/* Problem Breakdown Section */}
      {response && (
        <div className="w-10/12 max-w-4xl bg-white p-6 mt-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Solution:</h2>
          <p className="mb-4">{response}</p>
          <h3 className="font-semibold">Hints:</h3>
          <ul className="list-disc list-inside text-gray-600">
            {hints.map((hint, index) => (
              <li key={index}>{hint}</li>
            ))}
          </ul>
          <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500">
            Try It Yourself
          </button>
        </div>
      )}
    </div>
  );
}
