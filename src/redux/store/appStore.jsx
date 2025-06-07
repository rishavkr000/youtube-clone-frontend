import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../slice/sidebarSlice";
import searchReducer from "../slice/searchSlice";
import chatReducer from "../slice/chatSlice";

const appStore = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    search: searchReducer,
    chat: chatReducer,
  },
});

export default appStore;
