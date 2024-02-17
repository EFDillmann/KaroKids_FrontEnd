import { useEffect, useState } from "react";

const NavbarDesktop = () => {
	const [fixed, setFixed] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setFixed(true);
			} else {
				setFixed(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<nav
			className={`hidden h-14 w-screen bg-white px-8 md:flex items-center shadow-md shadow-gray-300 ${fixed ? "md:fixed md:z-10 md:top-0" : ""}`}>
			<ul className="flex gap-2 items-center flex-wrap font-medium md:max-w-[35%]">
				<li>Home</li>
				<li className="flex gap-1 items-center">
					Recien nacido{" "}
					<img
						src="/assets/navbar-icons/arrow-down.svg"
						alt="Logo de busqueda"
						className="pt-1"
					/>
				</li>
				<li className="flex gap-1">
					Bebé{" "}
					<img
						src="/assets/navbar-icons/arrow-down.svg"
						alt="Logo de busqueda"
						className="pt-1"
					/>
				</li>
				<li className="flex gap-1">
					Infantil{" "}
					<img
						src="/assets/navbar-icons/arrow-down.svg"
						alt="Logo de busqueda"
						className="pt-1"
					/>
				</li>
				<li className="flex gap-1">
					Junior{" "}
					<img
						src="/assets/navbar-icons/arrow-down.svg"
						alt="Logo de busqueda"
						className="pt-1"
					/>
				</li>
			</ul>
			<figure className="mx-auto">
				<img
					src="/assets/images/logo-karokids.png"
					alt="Logo de KaroKids"
					className="w-[184px] h-[45px]"
				/>
			</figure>
			<ul className="flex gap-4 justify-center">
				<li className="text-sky-500 font-medium">
					<a href="/">Login</a> / <a href="/">Register</a>
				</li>
				<li>
					<img
						src="/assets/navbar-icons/search-blue.svg"
						alt="Logo de Busqueda"
						className="w-6 h-6"
					/>
				</li>
				<li>
					<img
						src="/assets/navbar-icons/cart-blue.svg"
						alt="Logo del carrito de compras"
						className="w-6 h-6"
					/>
				</li>
				<li>
					<img
						src="/assets/navbar-icons/fav-blue.svg"
						alt="Logo de Favoritos"
						className="w-6 h-6"
					/>
				</li>
			</ul>
		</nav>
	);
};

export default NavbarDesktop;
