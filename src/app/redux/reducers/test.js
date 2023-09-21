import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // 초기 상태를 정의합니다.
  counters: 1012,
};

const counterSlice2 = createSlice({
  name: 'counter2',
  initialState,
  reducers: {
    increment: (state) => {
      state.counters += 1;
    },
    decrement: (state) => {
      state.counters -= 1;
    },
  },
});

export default counterSlice2.reducer;
