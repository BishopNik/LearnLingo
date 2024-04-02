/** @format */

import React, { createContext, useState } from 'react';

export const MainContext = createContext();

export const Context = ({ children }) => {
	const [idxColor] = useState(randomChoice());
	const [isOpen, setIsOpen] = useState(false);
	const [teacher, setTeacher] = useState(false);

	function randomChoice() {
		return Math.floor(Math.random() * 5);
	}

	return (
		<MainContext.Provider value={{ idxColor, isOpen, setIsOpen, teacher, setTeacher }}>
			{children}
		</MainContext.Provider>
	);
};
