import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../slice/sidebarSlice";
import searchReducer from "../slice/searchSlice";

const appStore = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    search: searchReducer,
  },
});

export default appStore;
