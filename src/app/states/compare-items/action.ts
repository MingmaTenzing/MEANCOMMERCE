import { createAction, props } from '@ngrx/store';
import { MeanProducts } from '../../../types';

export const add_to_compare = createAction(
  '[compare] Add-to-compare',
  props<{ product: MeanProducts }>()
);

export const remove_from_compare = createAction(
  '[compare] remove-from-compare',
  props<{ product: MeanProducts }>()
);
