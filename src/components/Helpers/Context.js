/** @format */

import React, { createContext, useState, useContext, useEffect } from 'react';

export const MainContext = createContext();

export const Context = ({ children }) => {
	const [idxColor] = useState(randomChoice());
	const [isOpenBookTrial, setIsOpenBookTrial] = useState(false);
	const [teacher, setTeacher] = useState(false);
	const [language, setLanguage] = useState(false);
	const [level, setLevel] = useState(false);
	const [price, setPrice] = useState(false);
	const [isOpenLogin, setIsOpenLogin] = useState(false);
	const [isOpenReg, setIsOpenReg] = useState(false);
	const [isOpenSelectAuth, setIsOpenSelectAuth] = useState(false);
	const [toFavorite, setToFavorite] = useState(false);

	const [user, setUser] = useState(null);

	function randomChoice() {
		return Math.floor(Math.random() * 5);
	}

	useEffect(() => {
		if (user) {
			try {
				localStorage.setItem('accessToken', JSON.stringify(user.accessToken));
			} catch (error) {
				console.error('Error saving to localStorage:', error);
			}
		}
	}, [user]);

	return (
		<MainContext.Provider
			value={{
				idxColor,
				isOpenBookTrial,
				setIsOpenBookTrial,
				teacher,
				setTeacher,
				language,
				setLanguage,
				level,
				setLevel,
				price,
				setPrice,
				isOpenLogin,
				setIsOpenLogin,
				isOpenReg,
				setIsOpenReg,
				user,
				setUser,
				isOpenSelectAuth,
				setIsOpenSelectAuth,
				toFavorite,
				setToFavorite,
			}}
		>
			{children}
		</MainContext.Provider>
	);
};

export const useMainContext = () => useContext(MainContext);
