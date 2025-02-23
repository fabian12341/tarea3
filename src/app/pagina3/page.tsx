'use client'
import { useState, useEffect } from "react";
import Link from 'next/link';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    name: yup.string().required("El nombre es obligatorio"),
    email: yup
      .string()
      .matches(/^[a-zA-Z0-9._%+-]+@(gmail|hotmail)\.[a-zA-Z]{3}$/, "El correo debe ser de Gmail o Hotmail y terminar en .xxx")
      .required("El correo es obligatorio"),
    password: yup
      .string()
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .matches(/[A-Z]/, "Debe contener al menos una letra mayúscula")
      .matches(/[\W]/, "Debe contener al menos un carácter especial")
      .required("La contraseña es obligatoria"),
  });
  

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  interface User {
    name: string;
    email: string;
    password: string;
  }

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const onSubmit = (data: User) => {
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center">
      {/* ✅ Navbar ocupa toda la pantalla */}
      <nav className="w-full bg-gray-800 text-white py-4 px-8 flex justify-between items-center fixed top-0 left-0 right-0">
        <Link href="/" className="text-lg hover:underline">
          Home
        </Link>
        <div className="flex gap-4">
          <Link href="/pagina2" className="text-lg hover:underline">
            Página 2
          </Link>
          <Link href="/pagina3" className="text-lg hover:underline">
            Página 3
          </Link>
        </div>
      </nav>

      {/* ✅ Formulario centrado con margen para que no lo tape la navbar */}
      <div className="mt-20 p-6 max-w-md w-full">
        {user && (
          <div className="text-right font-bold text-lg text-gray-700">
            Bienvenido, {user.name}
          </div>
        )}

        <h2 className="text-2xl font-bold mb-4">Registro</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <label className="block text-gray-700">Nombre</label>
            <input className="w-full p-2 border rounded text-black" {...register("name")} />
            <p className="text-red-500">{errors.name?.message}</p>
          </div>

          <div>
            <label className="block text-gray-700">Correo</label>
            <input type="email" className="w-full p-2 border rounded text-black" {...register("email")} />
            <p className="text-red-500">{errors.email?.message}</p>
          </div>

          <div>
            <label className="block text-gray-700">Contraseña</label>
            <input type="password" className="w-full p-2 border rounded text-black" {...register("password")} />
            <p className="text-red-500">{errors.password?.message}</p>
          </div>

          <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-700" type="submit">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}
