import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

function Navbar() {
	/**
	 * Ici, tu pourras mettre tes liens de navigation
	 */
	const links = [
		{
			id: 1,
			name: "Accueil",
			href: "/",
		},
		{
			id: 2,
			name: "Recette",
			href: "#",
		},
	];

	return (
		<header className={style.navbar}>
			<img src="https://picsum.photos/50" alt="logo" />
			<nav className={style.links}>
				{/* 
                    La méthode map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant, ici des <Link />
                 */}
				{links.map((link) => (
					<Link key={link.id} to={link.href}>
						{link.name}
					</Link>
				))}
			</nav>
		</header>
	);
}

export default Navbar;
