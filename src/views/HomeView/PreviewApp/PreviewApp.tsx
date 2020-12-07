import React, { FC, useEffect } from 'react';
import { BarChart, Typography, Components } from '../PreviewContent';
import {
	AppRoot,
	Home,
	LeftNavigation,
	NavigationBar,
	NavigationDrawer,
	NavigationLink,
	Profile,
	Theme,
} from '@nickbarnette/dashui';

export interface PreviewAppProps {
	theme: Theme;
	updateTheme: (theme: Theme) => void;
}

export const PreviewApp: FC<PreviewAppProps> = (props) => {
	// useEffect(() => {
	// 	console.log(props.theme);
	// }, [props.theme]);
	return (
		<AppRoot
			customLightTheme={props.theme}
			customDarkTheme={props.theme}
			style={{ border: '2px solid var(--text-default)' }}
			topNavigation={
				<NavigationBar
					left={
						<NavigationDrawer
							items={[
								{
									key: 'home',
									title: 'Home',
									link: '',
								},
							]}
						/>
					}
					center={
						<NavigationLink link="">
							Application Name
						</NavigationLink>
					}
					right={<NavigationLink link="">Link</NavigationLink>}
				/>
			}
			leftNavigation={
				<LeftNavigation
					items={[
						{
							svg: Home,
							text: 'Typography',
							content: <Typography />,
						},
						{
							svg: Profile,
							text: 'Graphs',
							content: <BarChart />,
						},
						{
							svg: Profile,
							text: 'Components',
							content: <Components />,
						},
					]}
				/>
			}
		/>
	);
};
