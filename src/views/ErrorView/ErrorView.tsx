import React, { FC, Fragment } from 'react';

// Components
import { Button, SVG, Error404 } from '@nickbarnette/dashui';

// Styles
import cx from 'classnames';
import cn from './ErrorView.scss';

interface ErrorViewProps {
	className?: string;
	testId?: string;
}

export const ErrorView: FC<ErrorViewProps> = (props) => {
	return (
		<div className={cn.container}>
			<SVG
				svg={Error404}
				tooltip="404 error: page not found"
				className={cn.svg}
			/>
			<h1 className={cn.subheader}>
				Sorry we couldn't find the page you are looking for.
			</h1>
			<Button
				variant="primary"
				onPress={() => {
					window.location.href = '/';
				}}
				tooltip="Go home"
			>
				Go Home
			</Button>
		</div>
	);
};
