import { createSlice } from '@reduxjs/toolkit';
import { removeAllUsers } from '../actions';

const userSlice = createSlice({
  name: 'user',
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
    },
    // removeAllUsers(state, action) {
    //   // while (state.length > 0) {
    //   //   state.pop();
    //   // }
    //   return [];
    // },
  },
  extraReducers(builder) {
    builder.addCase(removeAllUsers, () => {
      return [];
    });
  },
});

console.log(userSlice.actions);

export default userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions;
