'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function Pagina2() {
  const [color, setColor] = useState('bg-red-500');

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

      {/* Espaciador para evitar que el contenido quede detrás de la navbar */}
      <div className="mt-16 flex flex-col items-center gap-8">
        {/* Rectángulo en el centro */}
        <div className={`w-64 h-32 ${color} transition-all duration-300`}></div>

        {/* Cuatro botones debajo del rectángulo */}
        <div className="grid grid-cols-2 gap-4">
          <button onClick={() => setColor('bg-blue-500')} className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
            Azul
          </button>
          <button onClick={() => setColor('bg-green-500')} className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
            Verde
          </button>
          <button onClick={() => setColor('bg-yellow-500')} className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
            Amarillo
          </button>
          <button onClick={() => setColor('bg-purple-500')} className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
            Morado
          </button>
        </div>
      </div>
    </div>
  );
}
