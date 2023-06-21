import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {
  Action,
  AnyAction,
  combineReducers,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import alertReducer from './slices/alert/alertSlice';
import teamReducer from './slices/team/teamSlice';

import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import ourTestimonialReducer from './slices/ourTestimonials/teamSlice';

const reducers = {
  alert: alertReducer,
  team: teamReducer,
  ourTestimonials: ourTestimonialReducer
};
const combinedReducer = combineReducers(reducers);

const reducer = (
  state: ReturnType<typeof combinedReducer>,
  action: AnyAction
) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };

    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const makeStore = () =>
  configureStore({
    reducer: (state, action) => reducer(state, action),
    devTools: true,
  });

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<typeof combinedReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const wrapper = createWrapper(makeStore, {debug: false});

// export type RootState = ReturnType<typeof store.getState>;

// export default store;
