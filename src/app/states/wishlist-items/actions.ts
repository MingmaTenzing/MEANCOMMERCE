import { createAction, props } from '@ngrx/store';
import { MeanProducts } from '../../../types';

export const addToWishlist = createAction(
  '[wishlist] Add-to-Wishlist',
  props<{ product: MeanProducts }>()
);
export const remove_wishlist_item = createAction(
  '[wishlist] Remove-from-Wishlist',
  props<{ product: MeanProducts }>()
);
