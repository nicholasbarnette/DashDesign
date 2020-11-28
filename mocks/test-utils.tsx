import React, { FC, ReactElement } from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from '../src/store/reducers';
import { StoreMockInitState } from './StoreMock';

const render = (
	ui: ReactElement,
	{
		initialState = StoreMockInitState,
		store = createStore(rootReducer, StoreMockInitState),
		...renderOptions
	} = {},
) => {
	const Wrapper: FC = (props) => {
		return <Provider store={store}>{props.children}</Provider>;
	};
	return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
