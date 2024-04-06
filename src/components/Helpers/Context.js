/** @format */

import React, { createContext, useState, useContext, useEffect } from 'react';
import { signInWithCustomToken } from 'firebase/auth';
import { auth } from 'components/Helpers';

export const MainContext = createContext();

export const Context = ({ children }) => {
	// color
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
	const [toFavorite, setToFavorite] = useState(false);

	// User
	const [user, setUser] = useState(null);

	const refreshUser = async token => {
		await signInWithCustomToken(auth, token);
		return auth.currentUser;
	};

	useEffect(() => {
		const userSaveToken = async () => {
			try {
				if (user) {
					console.log('🚀 ~ userSaveToken ~ user:', user);
					// const refreshedUser = await refreshUser(user.accessToken);
					// console.log('🚀 ~ useEffect ~ refreshedUser:', refreshedUser);
					localStorage.setItem('accessToken', user.accessToken);
				} else localStorage.setItem('accessToken', '');
			} catch (error) {
				console.error('Error saving to localStorage:', error);
			}
		};

		userSaveToken();
	}, [user]);

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
				toFavorite,
				setToFavorite,
			}}
		>
			{children}
		</MainContext.Provider>
	);
};

export const useMainContext = () => useContext(MainContext);
