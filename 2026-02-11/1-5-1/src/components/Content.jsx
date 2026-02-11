import { useLanguage } from "../contexts/LanguageContext";

function Content() {
	const { t } = useLanguage();

	return (
		<div style={{ textAlign: "center", marginTop: "30px" }}>
			<h1>{t.greeting}</h1>
			<p>{t.description}</p>
		</div>
	);
}

export default Content;
