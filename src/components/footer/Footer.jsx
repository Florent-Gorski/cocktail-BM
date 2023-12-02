import style from "./Footer.module.css";

function Footer() {
	return (
		<footer className={style.footer}>
			<p>
				Fait avec ❤️ par <a href="#">Florent Gorski</a>
			</p>
		</footer>
	);
}

export default Footer;
