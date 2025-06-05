import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isSideBarOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
    closeMenu: (state) => {
      state.isSideBarOpen = false;
    }
  },
});

export const { toggleMenu, closeMenu } = sidebarSlice.actions;
export default sidebarSlice.reducer;
