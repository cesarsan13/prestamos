import Link from "next/link"
import SideBarItem from "./SideBarItem"
function SideBar() {
    return (
        <div className="p-2 bg-white w-full md:w-60 flex flex-col md:flex hidden" id="sideNav">
            <nav>
                <SideBarItem ruta="/" nombre={"Inicio"} icono={"fas fa-home"} />
                <SideBarItem ruta="/clientes" nombre={"Clientes"} icono={"fas fa-user"} />
                <SideBarItem ruta="/socios" nombre={"Socios"} />
                <SideBarItem ruta="/usuarios" nombre={"usuarios"} />
            </nav>
            {/* <!-- Ítem de Cerrar Sesión --> */}
            <Link className="block text-gray-500 py-2.5 px-4 my-2 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white mt-auto" href="#">
                <i className="fas fa-sign-out-alt mr-2"></i>Cerrar sesión
            </Link>

            {/* <!-- Señalador de ubicación --> */}
            <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mt-2"></div>

            {/* <!-- Copyright al final de la navegación lateral --> */}
            <p className="mb-1 px-5 py-3 text-left text-xs text-cyan-500">Copyright C-Soft@2023</p>

        </div>
    )
}

export default SideBar