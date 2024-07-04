import { createAction, props } from '@ngrx/store';
import { cartItems } from '../../../types';

export const addProduct = createAction(
  '[cartItems] Add',
  props<{ product: cartItems }>()
);
export const removeProduct = createAction(
  '[cartItems] Remove',
  props<{ product: cartItems }>()
);
export const updateCart = createAction(
  '[cartItems] Update All WholeCart',
  props<{ products: cartItems[] }>()
);

export const clear = createAction('[cartitems] Clear');
