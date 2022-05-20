import { createAction } from '@reduxjs/toolkit';

import type { History } from '_/types.d';

export const addHistory = createAction<History, 'ADD_HISTORY'>('ADD_HISTORY');

export const purgeHistory = createAction<undefined, 'PURGE_HISTORY'>('PURGE_HISTORY');
