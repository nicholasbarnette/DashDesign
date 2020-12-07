import { DefaultLightTheme, Theme } from '@nickbarnette/dashui';
import { RESET_THEME, UPDATE_THEME } from '../types';

export const updateTheme = (theme: Theme) => ({
	type: UPDATE_THEME,
	payload: theme,
});

export const resetTheme = () => ({
	type: RESET_THEME,
	payload: DefaultLightTheme,
});
