import React, { FC } from 'react';

// Components
import PaletteContentContainer from './PaletteContent/PaletteContentContainer';

interface HomeViewProps {
	className?: string;
	testId?: string;
}

export const HomeView: FC<HomeViewProps> = (props) => {
	return <PaletteContentContainer />;
};
