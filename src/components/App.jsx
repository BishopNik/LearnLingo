/** @format */

import { useEffect, lazy, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, useMainContext, readSettingsUser } from 'helpers';
import SharedLayout from './SharedLayout';
import Loader from 'components/Loader';
import { PrivateRoute } from 'components/PrivateRoute';

const Home = lazy(() => import('pages/Home'));
const Teachers = lazy(() => import('pages/Teachers'));
const Favorites = lazy(() => import('pages/Favorites'));

function App() {
	const { setUser, setIdxColor, setLikedTeachers } = useMainContext();
	const [isRefreshing, setIsRefreshing] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async user => {
			if (user) {
				const data = await readSettingsUser(user);
				setIdxColor(data.color || 0);
				setLikedTeachers(data.likedTeachers || []);
				setUser(user);
			}
			setIsRefreshing(false);
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
