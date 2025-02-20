import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8">
      {/* Navbar */}
      <nav className="w-full bg-gray-800 text-white py-4 px-8 flex justify-between items-center fixed top-0">
        <span className="text-lg font-bold">Home</span>
        <Link href="/pagina2" className="text-lg hover:underline">
          Página 2
        </Link>
      </nav>

      {/* Espaciador para que el contenido no quede debajo de la navbar */}
      <div className="mt-16 flex flex-col items-center gap-8">
        {/* Círculo en el centro */}
        <div className="w-32 h-32 bg-blue-500 rounded-full"></div>

        {/* Botón debajo del círculo */}
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Click me
        </button>
      </div>
    </div>
  );
}

