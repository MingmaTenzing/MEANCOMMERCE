import { createReducer, on } from '@ngrx/store';
import {
  addProduct,
  removeProduct,
  updateCart,
  clear,
  increaseQuantity,
} from './action';
import { AppState } from './app.state';
import { cartItems } from '../../../types';

export const initialState: AppState = {
  cartItems: [],
};

export const cartReducer = createReducer(
  initialState,
  on(addProduct, (state, { product }) => {
    const itemInCart = state.cartItems.find((item) => item._id === product._id);
    if (itemInCart) {
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity! + 1 }
            : item
        ),
      };
    } else {
      return {
        ...state,
        cartItems: [...state.cartItems, { ...product, quantity: 1 }],
      };
    }
  }),
  on(removeProduct, (state, { product }) => ({
    ...state,
    cartItems: state.cartItems.filter((p) => p._id !== product._id),
  })),
  on(updateCart, (state, { products }) => ({
    ...state,
    cartItems: products,
  }))
);
