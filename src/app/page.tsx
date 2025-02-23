'use client'
import { useState } from 'react';
import Link from 'next/link';
import React from 'react';


export default function Home() {

const [counter, setCounter] = useState(10);

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setCounter(counter + 1);
};

const handleSubmit2 = (e: React.FormEvent) => {
  e.preventDefault();
  setCounter(counter - 1);
};
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8">
      {/* Navbar */}
      <nav className="w-full bg-gray-800 text-white py-4 px-8 flex justify-between items-center fixed top-0">
        <Link href="/" className="text-lg hover:underline">
          Home 
        </Link>
        <Link href="/pagina2" className="text-lg hover:underline">
          Página 2
        </Link>
        <Link href="/pagina3" className="text-lg hover:underline">
          Página 3
        </Link>
      </nav>

      <div className="mt-16 flex flex-col items-center gap-8">
        <p>{counter}</p>
        <form onSubmit={handleSubmit}>
          <button 
            type = "submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Incrementar numero
          </button>
        </form>
        <form onSubmit={handleSubmit2}>
          <button 
            type = "submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Decrementar numero
          </button>


        </form>
      </div>
    </div>
  );
}

