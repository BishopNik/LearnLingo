/** @format */

import React, { createContext, useState } from 'react';

export const MainContext = createContext();

export const Context = ({ children }) => {
	const [idxColor] = useState(randomChoice());

	function randomChoice() {
		return Math.floor(Math.random() * 6);
	}

	return <MainContext.Provider value={{ idxColor }}>{children}</MainContext.Provider>;
};
