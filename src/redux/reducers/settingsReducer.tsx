import {createSlice} from '@reduxjs/toolkit';
import {DARK_THEME, LIGHT_THEME} from '../../utils/appThemes';
import {MENU_OPTIONS} from '../../utils/appConstants';

export const BOTTOM_MENU_OPTIONS = MENU_OPTIONS;

const settingsReducer = createSlice({
  name: 'settings',
  initialState: {
    theme: 'light',
    appThemes: LIGHT_THEME,
    menuOptions: [...MENU_OPTIONS],
  },
  reducers: {
    toggleTheme(state, action) {
      state.theme = action?.payload;
      state.appThemes = action?.payload == 'light' ? LIGHT_THEME : DARK_THEME;
    },

    resetSettings(state) {
      state.theme = 'light';
      state.appThemes = LIGHT_THEME;
      state.menuOptions = [...MENU_OPTIONS];
    },
  },
});

export const {toggleTheme, resetSettings} = settingsReducer.actions;
export default settingsReducer.reducer;
