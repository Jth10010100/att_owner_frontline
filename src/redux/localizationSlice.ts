import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { strings } from '../utility/localization/string';

interface LocalizationState {
    language: string;
    selectedLocation: string | null;
    cart: any[];
}

const initialState: LocalizationState = {
    language: 'en',
    selectedLocation: "Near You",
    cart: [],
};

const localizationSlice = createSlice({
    name: 'localization',
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<string>) => {
            state.language = action.payload;
            strings.setLanguage(action.payload);
            AsyncStorage.setItem('appLanguage', action.payload);
        },
        loadLanguage: (state, action: PayloadAction<string>) => {
            state.language = action.payload;
            strings.setLanguage(action.payload);
        },
        setLocation: (state, action: PayloadAction<string>) => {
            state.selectedLocation = action.payload;
            AsyncStorage.setItem('selectedLocation', action.payload);
        },
        loadLocation: (state, action: PayloadAction<string>) => {
            state.selectedLocation = action.payload;
        },
        addToCart: (state, action: PayloadAction<any>) => {
            state.cart.push(action.payload);
            AsyncStorage.setItem('cart', JSON.stringify(state.cart));
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.cart = state.cart.filter(item => item.productId !== action.payload);
            AsyncStorage.setItem('cart', JSON.stringify(state.cart));
        },
        loadCart: (state, action: PayloadAction<any[]>) => {
            state.cart = action.payload;
        }
    },
});

export const { setLanguage, loadLanguage, setLocation, loadLocation, addToCart, removeFromCart, loadCart } = localizationSlice.actions;
export default localizationSlice.reducer;
