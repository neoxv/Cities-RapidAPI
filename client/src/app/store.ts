import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { api } from './services/api';
import authReducer from '../features/auth/authSlice';
import homeReducer from '../features/home/homeSlice';
import { remoteApi } from './services/remoteApi';

export const store = configureStore({
  reducer: {
    authState: authReducer,
    homeState: homeReducer,
    [api.reducerPath]:api.reducer,
    [remoteApi.reducerPath]: remoteApi.reducer
  },
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat([api.middleware,remoteApi.middleware])
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

