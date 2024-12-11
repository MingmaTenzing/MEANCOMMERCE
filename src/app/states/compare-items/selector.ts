import {
  createFeature,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { Compare_Items_State } from './app.state';

export const selectAppState =
  createFeatureSelector<Compare_Items_State>('compare');

export const selectCompareItems = createSelector(
  selectAppState,
  (state: Compare_Items_State) => state.items
);
