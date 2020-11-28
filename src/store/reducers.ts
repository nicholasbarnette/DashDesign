import { combineReducers } from 'redux';
import { ThemeReducer } from './reducers/ThemeReducer';
import { ThemeActionTypes, ThemeState } from './types/ThemeTypes';

export interface RootAppState {
	themeState: ThemeState;
}

export type RootActions = ThemeActionTypes;

export const rootReducer = combineReducers<RootAppState>({
	themeState: ThemeReducer,
});
