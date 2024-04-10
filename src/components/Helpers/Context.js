/** @format */

import React, { createContext, useState, useContext } from 'react';

export const MainContext = createContext();

export const Context = ({ children }) => {
	// Сolor
	const [idxColor, setIdxColor] = useState(0);

	// Modal window
	const [isOpenBookTrial, setIsOpenBookTrial] = useState(false);
	const [isOpenLogin, setIsOpenLogin] = useState(false);
	const [isOpenReg, setIsOpenReg] = useState(false);
	const [isOpenSelectAuth, setIsOpenSelectAuth] = useState(false);

	// Teacher
	const [teacher, setTeacher] = useState(false);

	// Filter
	const [language, setLanguage] = useState(false);
	const [level, setLevel] = useState(false);
	const [price, setPrice] = useState(false);

	// Favorite
	const [likedTeachers, setLikedTeachers] = useState([]);

	// User
	const [user, setUser] = useState(null);

	return (
		<MainContext.Provider
			value={{
				idxColor,
				setIdxColor,
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
				likedTeachers,
				setLikedTeachers,
			}}
		>
			{children}
		</MainContext.Provider>
	);
};

export const useMainContext = () => useContext(MainContext);
