import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    setData: (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { startLoading, setData, setError } = listSlice.actions;
export default listSlice.reducer;
