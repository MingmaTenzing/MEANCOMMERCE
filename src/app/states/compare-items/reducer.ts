import { createReducer, on } from '@ngrx/store';
import { Compare_Items_State } from './app.state';
import { add_to_compare, remove_from_compare } from './action';

export const initialState: Compare_Items_State = {
  items: [],
};

export const compare_Reducer = createReducer(
  initialState,
  on(add_to_compare, (state, { product }) => {
    if (state.items.length === 3) {
      return state;
    }
    const itemExists = state.items.find((item) => item._id === product._id);
    if (!itemExists) {
      return {
        items: [...state.items, product],
      };
    }

    return state;
  }),
  on(remove_from_compare, (state, { product }) => ({
    ...state,
    items: state.items.filter((item) => item._id !== product._id),
  }))
);
