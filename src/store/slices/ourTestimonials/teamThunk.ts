import { instance } from "@/services/api/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchOurTestimonials = createAsyncThunk(
  'our-testimonial/list',
  async (request: undefined, {rejectWithValue}) => {
    try {
      const response = await instance.get('comments');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
)