import { useLanguage } from "../contexts/LanguageContext";

function Header() {
	const { toggleLanguage, t } = useLanguage();

	return (
		<header style={{ textAlign: "center", marginTop: "30px" }}>
			<button onClick={toggleLanguage}>{t.button}</button>
		</header>
	);
}

export default Header;
