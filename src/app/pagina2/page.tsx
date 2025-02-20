import Link from 'next/link';

export default function Pagina2() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8">
      {/* Navbar */}
      <nav className="w-full bg-gray-800 text-white py-4 px-8 flex justify-between items-center fixed top-0">
        <Link href="/" className="text-lg font-bold">Home</Link>
        <span className="text-lg">Página 2</span>
      </nav>

      {/* Espaciador para evitar que el contenido quede detrás de la navbar */}
      <div className="mt-16 flex flex-col items-center gap-8">
        {/* Rectángulo en el centro */}
        <div className="w-64 h-32 bg-red-500"></div>

        {/* Cuatro botones debajo del rectángulo */}
        <div className="grid grid-cols-2 gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
            Botón
          </button>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
            Botón
          </button>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
            Botón
          </button>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
            Botón
          </button>
        </div>
      </div>
    </div>
  );
}
