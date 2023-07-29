import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDropdownOpen: false,
  isSidebarOpen: false,
  isSidebarReduced: false,
  isNotificationsOpen: false,
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
    toggleSidebarWidth: (state) => {
      state.isSidebarReduced = !state.isSidebarReduced;
    },
    expandWidth: (state) => {
      state.isSidebarReduced = false;
    },
    openNotifications: (state) => {
      state.isNotificationsOpen = true;
    },
    closeNotifications: (state) => {
      state.isNotificationsOpen = false;
    },
    toggleNotifications: (state) => {
      state.isNotificationsOpen = !state.isNotificationsOpen;
    },
  },
});

export default uiSlice.reducer;

export const uiStore = (state) => state.ui;

export const {
  openDropdown,
  closeDropdown,
  toggleDropdown,
  openNotifications,
  closeNotifications,
  toggleNotifications,
  openSidebar,
  closeSidebar,
  toggleSidebar,
  toggleSidebarWidth,
  expandWidth,
} = uiSlice.actions;
