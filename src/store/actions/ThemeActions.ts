import { Theme } from '@nickbarnette/dashui';
import { UPDATE_THEME } from '../types';

export const updateTheme = (theme: Theme) => ({
	type: UPDATE_THEME,
	payload: theme,
});
