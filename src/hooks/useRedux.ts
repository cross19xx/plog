import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { AppDispatch } from '_/redux';
import type { RootState } from '_/redux/reducers';

export const useTypedDispatch = () => useDispatch<AppDispatch>();

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
