import { createReducer, on } from '@ngrx/store';
import { addProduct, removeProduct, updateCart, clear } from './action';
import { AppState } from './app.state';
import { cartItems } from '../../../types';

export const initialState: AppState = {
  cartItems: [],
};

export const cartReducer = createReducer(
  initialState,
  on(addProduct, (state, { product }) => ({
    ...state,
    cartItems: [...state.cartItems, product],
  })),
  on(removeProduct, (state, { product }) => ({
    ...state,
    cartItems: state.cartItems.filter((p) => p._id !== product._id),
  })),
  on(updateCart, (state, { products }) => ({
    ...state,
    cartItems: products,
  })),
  on(clear, (state) => initialState)
);
