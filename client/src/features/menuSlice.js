import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isMenuOpen: '1',
};


export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {

        openMenu: (state) => {
            state.isMenuOpen = '1';
        },
        closeMenu: (state) => {
            state.isMenuOpen = null;
        },
    },
});

export const { openMenu, closeMenu } = menuSlice.actions;

export const selectIsMenuOpen = (state) => state.menu.isMenuOpen;

export default menuSlice.reducer;