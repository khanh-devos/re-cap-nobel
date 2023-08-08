import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_NOBEL = 'https://api.nobelprize.org/2.1/laureates';

const initialState = {
  nobels: [],
  isLoading: true,
  amount: 0,
};

export const fetchNobel = createAsyncThunk(
  'nobelSlice/fetchNobel',
  async (name, thunkAPI) => {
    try {
      const res = await axios.get(API_NOBEL);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue('st went wrong');
    }
  },
);

const nobelSlice = createSlice({
  name: 'nobelSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNobel.pending, (state) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(fetchNobel.fulfilled, (state, { payload }) => {
        const arr = payload.laureates.map((item) => {
          const { id, fullName: { en: fullname }, gender } = item;
          const { date } = item.birth;
          const { en: city } = item.birth.place?.cityNow || 'unknown';
          const { en: country } = item.birth.place?.countryNow || 'unknown';

          const {
            awardYear,
            categoryFullName: { en: category },
            prizeAmount: prize,
          } = item.nobelPrizes[0];

          return {
            id, fullname, gender, date, city, country, awardYear, category, prize,
          };
        });

        return {
          ...state,
          isLoading: false,
          nobels: arr,
          amount: arr.length,
        };
      })
      .addCase(fetchNobel.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export default nobelSlice.reducer;
