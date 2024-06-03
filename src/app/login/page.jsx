"use client";
import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos al servidor
    console.log("Email:", email);
    console.log("Contraseña:", password);
  };

  return (
    <div className="flex h-[88.3vh] items-center justify-center ">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="mb-4 rounded-lg bg-white px-8 pb-8 pt-6 shadow-md"
        >
          <div className="mb-4">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="email"
            >
              Correo electrónico
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="email"
              type="email"
              placeholder="Ingresa tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              className="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="password"
              type="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline rounded  bg-blue-900 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="submit"
            >
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
