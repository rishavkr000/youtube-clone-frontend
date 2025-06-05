import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../slice/sidebarSlice";

const appStore = configureStore({
    reducer: {
        sidebar: sidebarReducer,
    }
})

export default appStore;