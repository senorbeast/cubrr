import { createSlice } from '@reduxjs/toolkit'

export const playSlice = createSlice({
  name: 'play',
  initialState: {
    value: false
  },
  reducers: {
    toggleplay: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = !state.value 
    },
  }
})

export const { toggleplay } = playSlice.actions

export default playSlice.reducer