import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import style from "./Root.module.css";

function Root() {
	return (
		<section className={style.frame}>
			<Navbar />
			<main className={style.main}>
				<Outlet />
			</main>
			<Footer />
		</section>
	);
}

export default Root;
