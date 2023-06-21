import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { TeamResponse, TeamState } from './types';

const initialState: TeamState = {
  teamsPageable: []
};

export const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    getUserInfo: (
      state: Draft<any>,
      action: PayloadAction<TeamResponse[]>
    ) => {
      state.teamsPageable = action.payload;
    },
  },
});

export default teamSlice.reducer;
