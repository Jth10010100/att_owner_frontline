import { configureStore } from '@reduxjs/toolkit';
import localizationReducer from './localizationSlice';
import cartReducer from './cartSlice';

const store = configureStore({
    reducer: {
        localization: localizationReducer,
        cart: cartReducer, // Added cart slice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
