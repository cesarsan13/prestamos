import React from 'react'
import Link from 'next/link'
function SideBarItem({ruta,nombre,icono}) {
    return (
        <Link className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white focus:outline-none focus:ring focus:ring-cyan-700" href={`${ruta}`}>
            <i className={`${icono} mr-2`}></i>{nombre}
        </Link>
    )
}

export default SideBarItem