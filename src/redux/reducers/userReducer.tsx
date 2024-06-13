import {createSlice} from '@reduxjs/toolkit';

const userReducer = createSlice({
  name: 'user',
  initialState: {
    token: '',
  },
  reducers: {
    storeToken(state, action) {
      return {
        ...state,
        token: action.payload?.token,
      };
    },
    resetUsers(state) {
      return {
        ...state,
        token: '',
      };
    },
  },
});

export const {storeToken, resetUsers} = userReducer.actions;
export default userReducer.reducer;
