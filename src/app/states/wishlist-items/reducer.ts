import { createReducer, on } from '@ngrx/store';
import { addToWishlist, remove_wishlist_item } from './actions';
import { WishListState } from './wishlist-State';
import { state } from '@angular/animations';

export const initialState: WishListState = {
  items: [],
};

export const wishListReducer = createReducer(
  initialState,
  on(addToWishlist, (state, { product }) => {
    const itemExists = state.items.find((item) => item._id === product._id);
    if (!itemExists) {
      return {
        items: [...state.items, product],
      };
    }
    return state;
  }),
  on(remove_wishlist_item, (state, { product }) => ({
    ...state,
    items: state.items.filter((item) => item._id !== product._id),
  }))
);
