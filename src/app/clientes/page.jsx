'use client';
import React from 'react'
import { useSession } from 'next-auth/react'
function Clientes() {
    const {data: session,status}= useSession()
    return (
        <>
            {/* <!-- Campo de búsqueda --> */}
            <div className="relative max-w-md w-full">
                <div className="absolute top-1 left-2 inline-flex items-center p-2">
                    <i className="fas fa-search  text-gray-400"></i>
                </div>
                <input className="w-full h-10 pl-10 pr-4 py-1 text-base placeholder-gray-500 border rounded-full focus:shadow-outline" type="search" placeholder="Buscar..." />
            </div>


            {/* <!-- Tercer contenedor debajo de los dos anteriores --> */}
            {/* <!-- Sección 3 - Tabla de Autorizaciones Pendientes --> */}
            <div className="mt-8 bg-white p-4 shadow rounded-lg">
                <h2 className="text-gray-500 text-lg font-semibold pb-4">Clientes Activos</h2>
                <div className="my-1"></div>
                {/* <!-- Espacio de separación --> */}
                <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
                {/* <!-- Línea con gradiente --> */}
                <div  className='overflow-scroll h-60'>

                    <table className="text-sm w-full table-fixed ">
                        <thead className=' bg-slate-600' style={{position:'sticky-top'}}>
                            <tr className="text-sm leading-normal">
                                <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Foto</th>
                                <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Nombre</th>
                                <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Rol</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr className="hover:bg-grey-lighter">
                                <td className="py-2 px-4 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" className="rounded-full h-10 w-10" /></td>
                                <td className="py-2 px-4 border-b border-grey-light">Juan Pérez</td>
                                <td className="py-2 px-4 border-b border-grey-light">Comercio</td>
                            </tr>
                            <tr className="hover:bg-grey-lighter">
                                <td className="py-2 px-4 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" className="rounded-full h-10 w-10" /></td>
                                <td className="py-2 px-4 border-b border-grey-light">Juan Pérez</td>
                                <td className="py-2 px-4 border-b border-grey-light">Comercio</td>
                            </tr>
                            <tr className="hover:bg-grey-lighter">
                                <td className="py-2 px-4 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" className="rounded-full h-10 w-10" /></td>
                                <td className="py-2 px-4 border-b border-grey-light">Juan Pérez</td>
                                <td className="py-2 px-4 border-b border-grey-light">Comercio</td>
                            </tr>
                            <tr className="hover:bg-grey-lighter">
                                <td className="py-2 px-4 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" className="rounded-full h-10 w-10" /></td>
                                <td className="py-2 px-4 border-b border-grey-light">Juan Pérez</td>
                                <td className="py-2 px-4 border-b border-grey-light">Comercio</td>
                            </tr>
                            <tr className="hover:bg-grey-lighter">
                                <td className="py-2 px-4 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" className="rounded-full h-10 w-10" /></td>
                                <td className="py-2 px-4 border-b border-grey-light">Juan Pérez</td>
                                <td className="py-2 px-4 border-b border-grey-light">Comercio</td>
                            </tr>
                            <tr className="hover:bg-grey-lighter">
                                <td className="py-2 px-4 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" className="rounded-full h-10 w-10" /></td>
                                <td className="py-2 px-4 border-b border-grey-light">Juan Pérez</td>
                                <td className="py-2 px-4 border-b border-grey-light">Comercio</td>
                            </tr>
                            <tr className="hover:bg-grey-lighter">
                                <td className="py-2 px-4 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" className="rounded-full h-10 w-10" /></td>
                                <td className="py-2 px-4 border-b border-grey-light">Juan Pérez</td>
                                <td className="py-2 px-4 border-b border-grey-light">Comercio</td>
                            </tr>

                            <tr className="hover:bg-grey-lighter">
                                <td className="py-2 px-4 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" className="rounded-full h-10 w-10" /></td>
                                <td className="py-2 px-4 border-b border-grey-light">Juan Pérez</td>
                                <td className="py-2 px-4 border-b border-grey-light">Comercio</td>
                            </tr>
                            {/* <!-- Añade más filas aquí como la anterior para cada autorización pendiente --> */}
                            <tr className="hover:bg-grey-lighter">
                                <td className="py-2 px-4 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" className="rounded-full h-10 w-10" /></td>
                                <td className="py-2 px-4 border-b border-grey-light">María Gómez</td>
                                <td className="py-2 px-4 border-b border-grey-light">Usuario</td>
                            </tr>

                            <tr className="hover:bg-grey-lighter">
                                <td className="py-2 px-4 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" className="rounded-full h-10 w-10" /></td>
                                <td className="py-2 px-4 border-b border-grey-light">Carlos López</td>
                                <td className="py-2 px-4 border-b border-grey-light">Usuario</td>
                            </tr>
                            <tr className="hover:bg-grey-lighter">
                                <td className="py-2 px-4 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" className="rounded-full h-10 w-10" /></td>
                                <td className="py-2 px-4 border-b border-grey-light">Laura Torres</td>
                                <td className="py-2 px-4 border-b border-grey-light">Comercio</td>
                            </tr>
                            <tr className="hover:bg-grey-lighter">
                                <td className="py-2 px-4 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" className="rounded-full h-10 w-10" /></td>
                                <td className="py-2 px-4 border-b border-grey-light">Ana Ramírez</td>
                                <td className="py-2 px-4 border-b border-grey-light">Usuario</td>
                            </tr>
                            <tr className="hover:bg-grey-lighter">
                                <td className="py-2 px-4 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" className="rounded-full h-10 w-10" /></td>
                                <td className="py-2 px-4 border-b border-grey-light">Ana Ramírez</td>
                                <td className="py-2 px-4 border-b border-grey-light">Usuario</td>
                            </tr>
                            <tr className="hover:bg-grey-lighter">
                                <td className="py-2 px-4 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" className="rounded-full h-10 w-10" /></td>
                                <td className="py-2 px-4 border-b border-grey-light">Ana Ramírez</td>
                                <td className="py-2 px-4 border-b border-grey-light">Usuario</td>
                            </tr>
                            <tr className="hover:bg-grey-lighter">
                                <td className="py-2 px-4 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" className="rounded-full h-10 w-10" /></td>
                                <td className="py-2 px-4 border-b border-grey-light">Ana Ramírez</td>
                                <td className="py-2 px-4 border-b border-grey-light">Usuario</td>
                            </tr>
                            <tr className="hover:bg-grey-lighter">
                                <td className="py-2 px-4 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" className="rounded-full h-10 w-10" /></td>
                                <td className="py-2 px-4 border-b border-grey-light">Ana Ramírez</td>
                                <td className="py-2 px-4 border-b border-grey-light">Usuario</td>
                            </tr>
                            <tr className="hover:bg-grey-lighter">
                                <td className="py-2 px-4 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" className="rounded-full h-10 w-10" /></td>
                                <td className="py-2 px-4 border-b border-grey-light">Ana Ramírez</td>
                                <td className="py-2 px-4 border-b border-grey-light">Usuario</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                {/* <!-- Botón "Ver más" para la tabla de Autorizaciones Pendientes --> */}
                <div className="text-right mt-4">
                    <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
                        Ver más
                    </button>
                </div>
            </div>
        </>
    )
}

export default Clientes