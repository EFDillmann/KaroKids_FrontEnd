import { useState } from "react";

const NavbarMobile = () => {
	const [openHamMenu, setOpenHamMenu] = useState(false);
	const showMenu = () => {
		setOpenHamMenu(!openHamMenu);
	};

	return (
		<nav className="py-2 fixed z-10 top-0 bg-white shadow-md shadow-gray-300 md:hidden">
			<ul className="w-screen max-h-[50px] px-2 flex items-center gap-4">
				<li className="mr-auto">
					<img
						src="/assets/images/logo-karokids.png"
						alt="Logo de KaroKids"
						className="w-[187px]"
					/>
				</li>
				<li>
					<img
						src="/assets/navbar-icons/search.svg"
						alt="Logo de Busqueda"
						className="w-6 h-6"
					/>
				</li>
				<li>
					<img
						src="/assets/navbar-icons/cart.svg"
						alt="Logo del carrito de compras"
						className="w-6 h-6"
					/>
				</li>
				<li onClick={showMenu}>
					<img
						src="/assets/navbar-icons/ham-menu.svg"
						alt="Logo del Menú desplegable"
						className="w-6 h-6"
					/>
				</li>
			</ul>
			<ul
				id="hamMenu"
				className={`${openHamMenu ? "fixed" : "hidden"} w-screen h-screen bg-white flex flex-col items-center py-8 font-medium text-slate-400 text-2xl gap-4`}>
				<li className="text-slate-600">Home</li>
				<li>Recién Nacido</li>
				<li>Bebé</li>
				<li>Infantil</li>
				<li>Junior</li>
			</ul>
		</nav>
	);
};

export default NavbarMobile;
