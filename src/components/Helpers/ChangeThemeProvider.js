/** @format */

import React, { createContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme as themeDefault } from '../../constants/theme';
import { useAuth } from 'hooks';

const ThemeContext = createContext();

const СhangeThemeProvider = ({ children }) => {
	const {
		user: { thema },
	} = useAuth();

	const userThema = themeDefault.filter(th => th.name === thema);

	const userThemeInit = userThema.length > 0 ? userThema[0].property : themeDefault[0].property;

	const [themeCurrent, setThemeCurrent] = useState(userThemeInit);

	useEffect(() => {
		setThemeCurrent(userThemeInit);
	}, [userThemeInit]);

	return (
		<ThemeContext.Provider value={{ setThemeCurrent }}>
			<ThemeProvider theme={themeCurrent}>{children}</ThemeProvider>
		</ThemeContext.Provider>
	);
};

export { СhangeThemeProvider, ThemeContext };
