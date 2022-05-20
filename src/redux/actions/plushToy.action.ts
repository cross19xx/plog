import { createAction } from '@reduxjs/toolkit';

import type { PlushToy } from '_/types.d';

type ModifiedPlushToy = Partial<Omit<PlushToy, 'id'>>;

export const addPlushToy = createAction<PlushToy>('ADD_PLUSH_TOY');

export const modifyPlushToy = createAction<{ id: PlushToy['id']; update: ModifiedPlushToy }>(
  'MODIFY_PLUSH_TOY',
);

export const purgePlushToys = createAction('PURGE_PLUSH_TOYS');

export const removePlushToy = createAction<PlushToy['id']>('REMOVE_PLUSH_TOY');
