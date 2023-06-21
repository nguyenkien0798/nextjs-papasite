import { instance } from '@/services/api/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { CareersState } from './types';

export const fetchTems = createAsyncThunk(
  'team/list',
  async (request: undefined, {rejectWithValue}) => {
    try {
      const response = await instance.get('members');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchRecruitment = createAsyncThunk(
  'careers/list',
  async (request: undefined, { rejectWithValue }) => {
    try {
      const response = await instance.get('recruitments');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchRecruitmentDetail = createAsyncThunk(
  `recruitments`,
  async (params: CareersState, { rejectWithValue }) => {
    try {
      const response = await instance.get(`recruitments/${params.id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
