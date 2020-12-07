import React, { CSSProperties, FC } from 'react';
import { Typography, Components, Graphs } from '../PreviewContent';
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
	style?: CSSProperties;
}

export const PreviewApp: FC<PreviewAppProps> = (props) => {
	return (
		<AppRoot
			customLightTheme={props.theme}
			customDarkTheme={props.theme}
			style={{ border: '2px solid var(--text-default)', ...props.style }}
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
							content: <Graphs />,
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
