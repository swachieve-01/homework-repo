import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
	const [language, setLanguage] = useState("ko");

	const toggleLanguage = () => {
		setLanguage((prev) => (prev === "ko" ? "en" : "ko"));
	};

	const translations = {
		ko: {
			greeting: "안녕하세요",
			description: "리액트 다국어 실습입니다.",
			button: "영어로 변경",
		},
		en: {
			greeting: "Hello",
			description: "This is a React i18n practice.",
			button: "Switch to Korean",
		},
	};

	const value = {
		language,
		toggleLanguage,
		t: translations[language],
	};

	return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
	return useContext(LanguageContext);
}
