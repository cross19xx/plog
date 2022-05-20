import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  persistReducer,
  PersistConfig,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

import rootReducer from '_/redux/reducers';

const REDUX_PERSIST_STORAGE_KEY = 'plog_redux_data';

const persistConfig: PersistConfig<any> = {
  key: REDUX_PERSIST_STORAGE_KEY,
  storage: AsyncStorage,
  version: 1,
};
const persistedReducers = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  reducer: persistedReducers,
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
