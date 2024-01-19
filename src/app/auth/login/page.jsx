import React from 'react'

function LoginPage() {
  return (
    <div className='h-[calc(100vh-7rem)] flex justify-center items-center'>
      <form action="" className='w-1/4'>
        <h1 className=' text-slate-300 text-2xl block mb-6 text-center '>Iniciar Sesion</h1>
        <label className='text-slate-500 mb-2 block' htmlFor="username">Usuario</label>
        <input type="text" name="username" className='p-3 rounded block bg-slate-900 text-slate-400 w-full' />
        <label className='text-slate-500 mb-2 block' htmlFor="username">Contraseña</label>
        <input type="password" name="password" className='p-3 rounded block bg-slate-900 text-slate-400 w-full' />
        <button className='w-full bg-blue-800 text-slate-400 p-3 rounded-lg-3 mt-6'>Iniciar Sesion</button>
      </form>
    </div>
  )
}

export default LoginPage