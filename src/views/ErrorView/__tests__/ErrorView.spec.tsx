import React from 'react';
import { cleanup, render } from '../../../../mocks/test-utils';
import { Router } from 'react-router';
import { ErrorView } from '..';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

afterEach(cleanup);

describe('basic error view', () => {
	it('renders', () => {
		const { getByText } = render(
			<Router history={history}>
				<ErrorView />
			</Router>,
		);
		expect(
			getByText("Sorry we couldn't find the page you are looking for."),
		).toBeTruthy();
	});
});
