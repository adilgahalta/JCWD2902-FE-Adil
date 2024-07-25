/** @format */

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter.slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const storeConfig = configureStore({
  reducer: {
    counter: counterReducer,
    kounter: counterReducer,
  },
});

type RootState = ReturnType<typeof storeConfig.getState>;
type AppDispatch = typeof storeConfig.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
