import {
	RESET_THEME,
	ThemeActionTypes,
	ThemeState,
	UPDATE_THEME,
} from '../types/ThemeTypes';
import { DefaultCustomTheme } from '../../assets/Theme';

export const InitialThemeState = { theme: DefaultCustomTheme };

export const ThemeReducer = (
	state = InitialThemeState,
	action: ThemeActionTypes,
): ThemeState => {
	switch (action.type) {
		case UPDATE_THEME:
			return {
				theme: { ...action.payload },
			};
		case RESET_THEME:
			return {
				theme: { ...action.payload },
			};
		default:
			return state;
	}
};
