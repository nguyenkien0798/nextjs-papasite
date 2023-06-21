import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { OurTestimonialsResponse, OurTestimonialsState } from './types';

const initialState: OurTestimonialsState = {
  ourTestimonialsPageable: []
};

export const ourTestimonialSlice = createSlice({
  name: 'our-testimonials',
  initialState,
  reducers: {

    fetchOurTestimonials: (
      state: Draft<any>,
      action: PayloadAction<OurTestimonialsResponse[]>
    ) => {
      state.ourTestimonialsPageable = action.payload;
    },
  },
});

export default ourTestimonialSlice.reducer;
