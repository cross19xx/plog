import { combineReducers } from '@reduxjs/toolkit';

import historyReducer from '_/redux/reducers/history.reducer';
import plushToyReducer from '_/redux/reducers/plushToy.reducer';

const rootReducer = combineReducers({
  history: historyReducer,
  plushToy: plushToyReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
