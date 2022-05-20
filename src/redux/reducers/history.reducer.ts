import { createReducer } from '@reduxjs/toolkit';

import * as historyActions from '_/redux/actions/history.action';
import { History } from '_/types';

const INITIAL_STATE: History[] = [];

export default createReducer<History[]>(INITIAL_STATE, (builder) => {
  builder.addCase(historyActions.addHistory, (state, action) => {
    return state.concat(action.payload);
  });

  builder.addCase(historyActions.purgeHistory, () => {
    return INITIAL_STATE;
  });
});
