import { Theme } from '@nickbarnette/dashui';
import { AnyAction } from 'redux';

// Actions
export const UPDATE_THEME = 'UPDATE_THEME';
export const RESET_THEME = 'RESET_THEME';

export interface ThemeAction extends AnyAction {
	type: typeof UPDATE_THEME | typeof RESET_THEME;
	payload: Theme;
}

export type ThemeActionTypes = ThemeAction;

export type ThemeState = { theme: Theme };
