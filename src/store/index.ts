import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore, Middleware } from "@reduxjs/toolkit";
import { contactsSlice } from "./contacts";
import ReduxThunk from "redux-thunk";

const middleware = [ReduxThunk] as Array<Middleware>;

export const store = configureStore({
  reducer: {
    contactsStore: contactsSlice.reducer,
  },
  middleware,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch | any;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
