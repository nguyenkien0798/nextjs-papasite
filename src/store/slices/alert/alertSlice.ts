import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

import { AlertProps } from './type';

const initialState = <AlertProps>{
  open: false,
  message: '',
};

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    updateAlertStatus: (
      state: Draft<AlertProps>,
      action: PayloadAction<AlertProps>
    ) => {
      state.open = action.payload.open;
      state.message = action.payload.message;
    },
    closeAlert: (state: Draft<AlertProps>, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
  },
});
// Reducers and actions
export const { updateAlertStatus, closeAlert } = alertSlice.actions;

export default alertSlice.reducer;
