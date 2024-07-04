import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { cartItems } from '../../../types';

export const selectAppState = createFeatureSelector<AppState>('cartItems');

export const selectProducts = createSelector(
  selectAppState,
  (state: AppState) => state.cartItems
);

export const selectProductbyId = (productId: string) =>
  createSelector(selectProducts, (products: cartItems[]) =>
    products.find((p) => p._id === productId)
  );

// export const selectProductbyId = createSelector(
//   selectProducts,
//   (products: cartItems[], props: { productId: string }) =>
//     products.find((p) => p._id === props.productId)
// );
