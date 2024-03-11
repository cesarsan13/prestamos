'use client'
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
 function LoginPage() {
  // const  session = await getServerSession(authOptions)
  // console.log(session)
  const router = useRouter();
  

 
  const [error, setError] = useState(null);
 
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit(async (data) => {
    const res = await signIn("credentials", {
      username: data.username,
      password: data.password,
      redirect: false,
    });
    res.error ? setError(res.error) : router.push("/");
  });
  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form action="" className="w-1/4" onSubmit={onSubmit}>
        {error && (
          <p className="bg-red-500 text-white text-xs p-3 rounded-md text-center">
            {error}
          </p>
        )}
        <h1 className=" text-slate-300 text-2xl block mb-6 mt-4 text-center ">
          Iniciar Sesion
        </h1>
        <label className="text-slate-500 mb-2 block" htmlFor="username">
          Usuario
        </label>
        <input
          type="text"
          name="username"
          className="p-3 rounded block bg-slate-900 text-slate-400 w-full"
          {...register("username", { required: "Usuario requerido" })}
        />
        {errors.username && (
          <span className="text-red-500 text-sm">
            {errors.username.message}
          </span>
        )}
        <label className="text-slate-500 mb-2 block" htmlFor="username">
          Contraseña
        </label>
        <input
          type="password"
          name="password"
          className="p-3 rounded block bg-slate-900 text-slate-400 w-full"
          {...register("password", { required: "Contraseña requerida" })}
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}
        <button className="w-full bg-blue-800 text-slate-400 p-3 rounded-lg-3 mt-6">
          Iniciar Sesion
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
