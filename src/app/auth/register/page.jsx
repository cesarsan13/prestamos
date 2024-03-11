"use client";
import React from "react";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
function RegisterPager() {
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit(async (data) => {
    const { username, email, password } = data;
    console.log(data);
    const res = await fetch(`${process.env.DOMAIN}api/store`, {
      method: "POST",
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // const resJson = await res.json()
    // console.log(resJson)
  });
  return (
    <>
      <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
        <form onSubmit={onSubmit} className="w-1/4">
        {error && (
          <p className="bg-red-500 text-white text-xs p-3 rounded-md text-center">
            {error}
          </p>
        )}
          <h1 className="text-slate-600 font-bold text-3xl mb-4">Registrar</h1>
          <label htmlFor="username" className="text-slate-500 mb-2 block">
            Usuario
          </label>
          <input
            placeholder="Usuario123"
            type="text"
            name="username"
            className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
            {...register("username", { required: "Usuario Requerido" })}
          />
          {errors.username && (
            <span className="text-red-500 text-sm">
              {errors.username.message}
            </span>
          )}
          <label htmlFor="email" className="text-slate-500 mb-2 block">
            Correo
          </label>
          <input
            placeholder="usuario@gmail.com"
            type="text"
            name="email"
            className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
            {...register("email", {
              required: "El correo es requerido",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Formato de Correo inválido",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
          <label htmlFor="password" className="text-slate-500 mb-2 block">
            Constraseña
          </label>
          <input
            placeholder="*****"
            type="password"
            name="password"
            className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
            {...register("password", {
              required: "Contraseña Requerida",
            })}
          />
          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}
          <label
            htmlFor="confirmPassword"
            className="text-slate-500 mb-2 block"
          >
            Confirmar Constraseña
          </label>
          <input
            placeholder="*****"
            type="password"
            name="confirmPassword"
            className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
            {...register("confirmPassword", {
              required: "Confirmacion de contraseña Requerida",
              validate: (value, formValues) => {
                if (value != formValues.password)
                  return "Las contraseñas no coinciden";
              },
            })}
          />
          {errors.confirmPassword && (
            <span className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </span>
          )}
          <button className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2">
            Register
          </button>
        </form>
      </div>
    </>
  );
}
export default RegisterPager;
