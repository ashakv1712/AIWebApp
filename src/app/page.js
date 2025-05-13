'use client';

import { useState } from 'react';

export default function Home() {
 const quotes = [
    "Optimize like a compiler—cut the fluff, keep the logic sharp.",
    "Debugging isn’t failure; it’s refining your logic.",
    "Persistence is the loop that breaks any problem.",
    "One line of code can change everything—write with purpose.",
    "Great software is built commit by commit.",
    "Every error is a lesson in disguise.",
    "The best algorithms come from patience and precision.",
    "Your mind is the ultimate IDE—train it well.",
    "Refactor doubts like code—cut waste, keep efficiency.",
    "Every commit is progress—keep coding forward."
];

  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Fuel For Developers 💻💾
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg text-center">
        <p className="text-xl italic text-gray-700">"{quote}"</p>
      </div>
      <button
        onClick={getRandomQuote}
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        New Quote
      </button>
    </main>
  );
}
