/** @format */

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader';
import Header from 'components/Header';

const SharedLayout = () => {
	return (
		<>
			<Header />
			<Suspense fallback={<Loader />}>
				<Outlet />
			</Suspense>
		</>
	);
};

export default SharedLayout;
