import React, { FC } from 'react';
import { ButtonGroup, InputGroup } from '.';
import { IconGroup } from './IconGroup';
import { Heading } from '@nickbarnette/dashui';

export const Components: FC = () => {
	return (
		<div
			style={{
				flex: '1 1 auto',
				display: 'flex',
				flexDirection: 'row',
				height: '100%',
				width: '100%',
			}}
		>
			<div style={{ height: '100%', width: '100%' }}>
				<Heading level={3} style={{ marginBlockEnd: '1rem' }}>
					Buttons
				</Heading>
				<ButtonGroup variant="neutral" />
				<ButtonGroup variant="primary" />
				<ButtonGroup variant="secondary" />
				<Heading level={3} style={{ marginBlockEnd: '1rem' }}>
					Inputs
				</Heading>
				<InputGroup />
				<Heading level={3} style={{ marginBlockEnd: '1rem' }}>
					Icons
				</Heading>
				<IconGroup />
			</div>
		</div>
	);
};
