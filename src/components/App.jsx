/** @format */

import { useEffect, lazy, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { onAuthStateChanged, signInWithCustomToken } from 'firebase/auth';
import { auth, useMainContext, readSettingsUser } from 'components/Helpers';
import SharedLayout from './SharedLayout';
import Loader from 'components/Loader';
import { PrivateRoute } from 'components/PrivateRoute';

const Home = lazy(() => import('pages/Home'));
const Teachers = lazy(() => import('pages/Teachers'));
const Favorites = lazy(() => import('pages/Favorites'));

function App() {
	const { setUser, setIdxColor, setLikedTeachers } = useMainContext();
	const [isRefreshing, setIsRefreshing] = useState(false);

	// const refreshUser = async token => {
	// 	const { accessToken } = await signInWithCustomToken(auth, token);
	// 	await signInWithCustomToken(auth, accessToken);

	// 	const user = auth.currentUser;
	// 	return user;
	// };

	// useEffect(() => {
	// 	const refreshUserUseEffect = async () => {
	// 		if (isRefreshing) {
	// 			const token = localStorage.getItem('refreshToken') || '';
	// 			try {
	// 				if (token) {
	// 					const user = await refreshUser(token);
	// 					setUser(user);
	// 				}
	// 			} catch (error) {
	// 				console.error('Error refreshing user:', error);
	// 				setUser(null);
	// 			} finally {
	// 				setIsRefreshing(false);
	// 			}
	// 		}
	// 	};

	// 	refreshUserUseEffect();
	// }, [isRefreshing, setUser]);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async user => {
			if (user) {
				const data = await readSettingsUser(user);
				setIdxColor(data.color || 0);
				setLikedTeachers(data.likedTeachers || []);
				setUser(user);
			} else {
				const refreshToken = localStorage.getItem('refreshToken');

				if (refreshToken) {
					try {
						await signInWithCustomToken(auth, refreshToken);
						console.log('Сеанс аутентификации пользователя восстановлен');
					} catch (error) {
						console.error('Ошибка восстановления сеанса аутентификации:', error);
					}
				}
			}
		});

		return () => {
			unsubscribe();
		};
	}, [setIdxColor, setLikedTeachers, setUser]);

	return isRefreshing ? (
		<Loader />
	) : (
		<Routes>
			<Route path='/' element={<SharedLayout />}>
				<Route index element={<Home />} />
				<Route path='teachers' element={<Teachers />} />
				<Route
					path='/favorites'
					element={<PrivateRoute component={<Favorites />} redirectTo='/teachers' />}
				/>
				<Route path='*' element={<Home />} />
			</Route>
		</Routes>
	);
}

export default App;
