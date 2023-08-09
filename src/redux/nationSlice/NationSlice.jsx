import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const API_NOBEL = 'https://api.nobelprize.org/2.1/laureates';

const initialState = {
  nobels: [],
  isLoading: true,
  amount: 0,
  uniqueCountries: [],
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

const takeUniqueCountries = (arr) => {
  const uniqueCountries = [];
  const compare = [];

  arr.forEach(({ country, id, city }) => {
    if (!compare.includes(country)) {
      compare.push(country);
      uniqueCountries.push({ id, country, cities: [city] });
    } else {
      const check = uniqueCountries.find((item) => item.country === country);
      check.cities.push(city);
    }
  });
  return uniqueCountries;
};

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
          const { en: city } = item.birth.place?.cityNow || { en: 'Unknown_City' };
          const { en: country } = item.birth.place?.countryNow || { en: 'Unknown_Country' };

          const {
            awardYear,
            categoryFullName: { en: category },
            prizeAmount: prize,
          } = item.nobelPrizes[0];

          // const city = city123.replace(/[^a-z0-9]/gi, '_').toLowerCase();
          // const country = country123.replace(/[^a-z0-9]/gi, '_').toLowerCase();

          return {
            id, fullname, gender, date, city, country, awardYear, category, prize,
          };
        });

        return {
          ...state,
          isLoading: false,
          nobels: arr,
          amount: arr.length,
          uniqueCountries: takeUniqueCountries(arr),
        };
      })
      .addCase(fetchNobel.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export default nobelSlice.reducer;
