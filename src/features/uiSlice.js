import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDropdownOpen: false,
  isSidebarOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openDropdown: (state) => {
      state.isDropdownOpen = true;
    },
    closeDropdown: (state) => {
      state.isDropdownOpen = false;
    },
    toggleDropdown: (state) => {
      state.isDropdownOpen = !state.isDropdownOpen;
    },
    openSidebar: (state) => {
      state.isSidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export default uiSlice.reducer;

export const uiStore = (state) => state.ui;

export const {
  openDropdown,
  closeDropdown,
  toggleDropdown,
  openSidebar,
  closeSidebar,
  toggleSidebar,
} = uiSlice.actions;
