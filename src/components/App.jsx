/** @format */

import { useEffect, lazy, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { signInWithCustomToken } from 'firebase/auth';
import { auth, useMainContext } from 'components/Helpers';
import SharedLayout from './SharedLayout';
import Loader from 'components/Loader';
import { PrivateRoute } from 'components/PrivateRoute';

const Home = lazy(() => import('pages/Home'));
const Teachers = lazy(() => import('pages/Teachers'));
const Favorites = lazy(() => import('pages/Favorites'));

function App() {
	const { setUser } = useMainContext();
	const [isRefreshing, setIsRefreshing] = useState(true);

	const refreshUser = async token => {
		await signInWithCustomToken(auth, token);
		const user = auth.currentUser;
		return user;
	};

	useEffect(() => {
		const refreshUserUseEffect = async () => {
			if (isRefreshing) {
				const token = localStorage.getItem('accessToken') || '';
				try {
					if (token) {
						const user = await refreshUser(token);
						setUser(user);
					}
				} catch (error) {
					console.error('Error refreshing user:', error);
					setUser(null);
				} finally {
					setIsRefreshing(false);
				}
			}
		};

		refreshUserUseEffect();
	}, [isRefreshing, setUser]);

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
