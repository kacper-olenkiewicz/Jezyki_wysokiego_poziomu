import { createContext, useContext, useMemo, useEffect, useState } from "react";

const ThemeContext = createContext({ dark: false, toggleTheme: () => {} });

export function ThemeProvider({ children }) {
	const [dark, setDark] = useState(false);
	const toggleTheme = () => setDark((prev) => !prev);

	useEffect(() => {
		document.body.dataset.theme = dark ? "dark" : "light";
	}, [dark]);

	const value = useMemo(() => ({ dark, toggleTheme }), [dark]);

	return (
		<ThemeContext.Provider value={value}>
			{children}
		</ThemeContext.Provider>
	);
}

export const useTheme = () => useContext(ThemeContext);