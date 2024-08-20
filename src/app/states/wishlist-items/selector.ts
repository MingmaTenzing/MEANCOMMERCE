import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WishListState } from './wishlist-State';

export const selectAppState = createFeatureSelector<WishListState>('wishList');

export const selectWishlist = createSelector(
  selectAppState,
  (state: WishListState) => state.items
);
