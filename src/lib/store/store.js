import { configureStore } from '@reduxjs/toolkit';

import navbarReducer from './features/navbar/navbarSlice';
// store variable is a global variable.
export const makeStore = () => {
    return configureStore({
        reducer: {

            navbar: navbarReducer,
        },
    });
};
