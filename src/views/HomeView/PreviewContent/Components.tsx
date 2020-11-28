import React, { FC } from 'react';
import { ButtonGroup, InputGroup } from '.';
import { IconGroup } from './IconGroup';

export const Components: FC = () => {
	return (
		<div
			style={{ flex: '1 1 auto', display: 'flex', flexDirection: 'row' }}
		>
			<div>
				<ButtonGroup variant="neutral" />
				<ButtonGroup variant="primary" />
				<ButtonGroup variant="secondary" />
				<InputGroup />
				<IconGroup />
			</div>
		</div>
	);
};
