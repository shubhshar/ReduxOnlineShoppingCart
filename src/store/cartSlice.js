const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    }
  }
});

//We can export actions and reducers the following way if we are using createSlice.
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
