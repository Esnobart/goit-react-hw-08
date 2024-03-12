import { configureStore } from "@reduxjs/toolkit"
import filtersReducer from "./filtersSlice"
import contactsReducer from "./contactsSlice"
import contactReducer from "./contactSlice"
import authReducer from "./authSlice"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
	reducer: {
		contacts: contactsReducer,
		filters: filtersReducer,
    auth: persistReducer(authPersistConfig, authReducer),
    contact: contactReducer
	},
	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
    })
})

export const persistedStore = persistStore(store)