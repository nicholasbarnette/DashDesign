import React from 'react';
import { cleanup, render } from '../../../../mocks/test-utils';
import { Router } from 'react-router';
import { HomeView } from '..';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

afterEach(cleanup);

describe('basic home view', () => {
	it('renders', () => {
		const { getByText } = render(
			<Router history={history}>
				<HomeView />
			</Router>,
		);
		expect(getByText('Theme Palette')).toBeTruthy();
	});
});
