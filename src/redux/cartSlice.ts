import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface CartItem {
    productId: string;
    itemName: string;
    price: {
        discounted: number;
        regular: number;
    };
    imageUrl: string;
    quantity: number;
}

interface CartState {
    cart: CartItem[];
}

const initialState: CartState = {
    cart: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state, action: PayloadAction<CartItem[]>) => {
            state.cart = action.payload;
        },
        addToCart: (state, action: PayloadAction<CartItem>) => {
            console.log("comes in the cart",state,action)
            const existingItem = state.cart.find(item => item.productId === action.payload.productId);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
            saveCartToStorage(state.cart);
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.cart = state.cart.filter(item => item.productId !== action.payload);
            saveCartToStorage(state.cart);
        },
        updateCartQuantity: (state, action: PayloadAction<{ productId: string; quantity: number }>) => {
            const item = state.cart.find(item => item.productId === action.payload.productId);
            if (item) {
                item.quantity = action.payload.quantity;
            }
            saveCartToStorage(state.cart);
        },
        clearCart: (state) => {
            state.cart = [];
            AsyncStorage.removeItem('cart');
        },
    },
});

const saveCartToStorage = async (cart: CartItem[]) => {
    try {
        await AsyncStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
        console.error('Failed to save cart:', error);
    }
};

export const loadCartFromStorage = () => async (dispatch: any) => {
    try {
        const cartData = await AsyncStorage.getItem('cart');
        if (cartData) {
            dispatch(setCart(JSON.parse(cartData)));
        }
    } catch (error) {
        console.error('Failed to load cart:', error);
    }
};

export const { setCart, addToCart, removeFromCart, updateCartQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

