import { createStore, applyMiddleware, AnyAction } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import reducer from "../Reducers";


const initalState = {}
const middleware = [thunk];
const store = createStore(reducer, initalState, composeWithDevTools(applyMiddleware(...middleware)));

export type AppDispatch = typeof store.dispatch;
export type ReduxState = ReturnType<typeof reducer>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  AnyAction
>;


export const useTypedDispatch = () => useDispatch<TypedDispatch>();
export const useTypedSelector: TypedUseSelectorHook<ReduxState> = useSelector;
export default store;

