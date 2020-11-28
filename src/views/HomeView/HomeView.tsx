import React, { FC } from 'react';

// Components
import { Tabbar } from '@nickbarnette/dashui';
import PreviewAppContainer from './PreviewApp/PreviewAppContainer';
import PaletteContentContainer from './PaletteContent/PaletteContentContainer';

interface HomeViewProps {
	className?: string;
	testId?: string;
}

export const HomeView: FC<HomeViewProps> = (props) => {
	return (
		<Tabbar
			label="home"
			tabs={[
				{
					id: 0,
					title: 'Theme Palette',
					content: <PaletteContentContainer />,
				},
				{
					id: 1,
					title: 'Theme Preview',
					content: <PreviewAppContainer />,
				},
			]}
		/>
	);
};
