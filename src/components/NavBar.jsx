import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex h-20 items-center justify-between bg-slate-900 px-2 z-10">
      <Link href="/">
        <img src="cashier.svg" className="ml-8" />
      </Link>
      <input
        type="text"
        className="h-7 w-2/5 rounded-md ml-5 pl-2 text-black"
        placeholder="Buscar negocios..."
      />
      <ul className="flex w-2/6 justify-evenly">
        <Link href="/register">
          <li className="cursor-pointer text-gray-200 hover:text-white">
            Registrarse
          </li>
        </Link>
        <Link href="/login">
          <li className="cursor-pointer text-gray-200 hover:text-white">
            Iniciar Sesion
          </li>
        </Link>
        <Link href="/about">
          <li className="cursor-pointer text-gray-200 hover:text-white">
            Sobre Nosotros
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
