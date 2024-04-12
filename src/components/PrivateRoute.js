/** @format */

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useMainContext } from '../helpers';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
	const { user } = useMainContext();

	return !user ? <Navigate to={redirectTo} /> : Component;
};
