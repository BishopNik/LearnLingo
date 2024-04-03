/** @format */

import { useEffect, lazy } from 'react';
// import { useDispatch } from 'react-redux';
// import { refreshUser } from 'redux/auth/operations';
import { Routes, Route } from 'react-router-dom';
// import { useAuth } from 'hooks';
import SharedLayout from './SharedLayout';
import Loader from 'components/Loader';
import { PrivateRoute } from 'components/PrivateRoute';

const Home = lazy(() => import('pages/Home'));
const Teachers = lazy(() => import('pages/Teachers'));
const Favorites = lazy(() => import('pages/Favorites'));

function App() {
	// const dispatch = useDispatch();
	// const { isRefreshing } = useAuth();
	const isRefreshing = false;

	// useEffect(() => {
	// 	dispatch(refreshUser());
	// }, [dispatch]);

	return isRefreshing ? (
		<Loader />
	) : (
		<Routes>
			<Route path='/' element={<SharedLayout />}>
				<Route index element={<Home />} />
				<Route path='teachers' element={<Teachers />} />
				<Route path='favorites' element={<Favorites />} />
				{/* <Route
					path='/favorites'
					element={<PrivateRoute component={<Favorites />} redirectTo='/' />}
				/> */}
				<Route path='*' element={<Home />} />
			</Route>
		</Routes>
	);
}

export default App;
