/** @format */

import React, { createContext, useState } from 'react';

export const MainContext = createContext();

export const Context = ({ children }) => {
	return <MainContext.Provider value={{}}>{children}</MainContext.Provider>;
};
