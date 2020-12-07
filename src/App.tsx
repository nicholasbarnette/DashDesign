import React, { lazy, Suspense, FC, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';

// App state
import { Provider } from 'react-redux';
import storeConfig from './store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
const store = storeConfig();

// Views
const HomeView = lazy(() => import('./views/HomeView'));
const ErrorView = lazy(() => import('./views/ErrorView'));

// Components
import {
	AppRoot,
	NavigationBar,
	BusyIndicator,
	NavigationLink,
	DefaultLightTheme,
	DefaultDarkTheme,
} from '@nickbarnette/dashui';

// Styles
import './App.scss';

const history = createBrowserHistory();

const App: FC = () => {
	useEffect(() => {
		console.log(DefaultLightTheme);
	}, [DefaultLightTheme]);
	return (
		<Provider store={store.store}>
			<PersistGate
				loading={<BusyIndicator />}
				persistor={store.persistor}
			>
				<AppRoot
					customLightTheme={DefaultLightTheme}
					customDarkTheme={DefaultDarkTheme}
					topNavigation={
						<NavigationBar
							center={
								<NavigationLink link="/">
									Dash Design
								</NavigationLink>
							}
						/>
					}
				>
					<Router history={history}>
						<Suspense fallback={<BusyIndicator />}>
							<Switch>
								<Route exact path="/">
									<HomeView />
								</Route>
								<Route>
									<ErrorView />
								</Route>
							</Switch>
						</Suspense>
					</Router>
				</AppRoot>
			</PersistGate>
		</Provider>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
