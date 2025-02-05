import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeSection: '',
  isMenuOpen: false,
  isProfileOpen: false,
};

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setActiveSection(state, action) {
      state.activeSection = action.payload;
    },
    toggleMenu(state) {
      state.isMenuOpen = !state.isMenuOpen;
    },
    toggleProfile(state) {
      state.isProfileOpen = !state.isProfileOpen;
    },
  },
});

export const { setActiveSection, toggleMenu, toggleProfile } = navbarSlice.actions;

export default navbarSlice.reducer;