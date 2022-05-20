import { createReducer } from '@reduxjs/toolkit';

import * as plushToyActions from '_/redux/actions/plushToy.action';
import { PlushToy } from '_/types';

const INITIAL_STATE: PlushToy[] = [];

export default createReducer<PlushToy[]>(INITIAL_STATE, (builder) => {
  builder.addCase(plushToyActions.addPlushToy, (state, action) => {
    return state.concat(action.payload);
  });

  builder.addCase(plushToyActions.modifyPlushToy, (state, action) => {
    const { id, update } = action.payload;
    return state.map((plushToy) => (plushToy.id === id ? { ...plushToy, ...update } : plushToy));
  });

  builder.addCase(plushToyActions.purgePlushToys, () => {
    return INITIAL_STATE;
  });

  builder.addCase(plushToyActions.removePlushToy, (state, action) => {
    return state.filter((plushToy) => plushToy.id !== action.payload);
  });
});
