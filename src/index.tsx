import React, { lazy, FC } from 'react';
import ReactDOM from 'react-dom';

// App state
import { Provider } from 'react-redux';
import storeConfig from './store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
const store = storeConfig();

// Views
const HomeView = lazy(() => import('./views/HomeView'));

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
import './app.scss';

const App: FC = () => {
	return (
		<AppRoot
			customLightTheme={DefaultLightTheme}
			customDarkTheme={DefaultDarkTheme}
			topNavigation={
				<NavigationBar
					center={
						<NavigationLink link="/">Dash Design</NavigationLink>
					}
				/>
			}
		>
			<HomeView />
		</AppRoot>
		// <Provider store={store.store}>
		// 	<PersistGate
		// 		loading={<BusyIndicator />}
		// 		persistor={store.persistor}
		// 	>
		// 		<AppRoot
		// 			customLightTheme={DefaultLightTheme}
		// 			customDarkTheme={DefaultDarkTheme}
		// 			topNavigation={
		// 				<NavigationBar
		// 					center={
		// 						<NavigationLink link="/">
		// 							Dash Design
		// 						</NavigationLink>
		// 					}
		// 				/>
		// 			}
		// 		>
		// 			<HomeView />
		// 		</AppRoot>
		// 	</PersistGate>
		// </Provider>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
