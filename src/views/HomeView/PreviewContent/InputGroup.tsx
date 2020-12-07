import { Input } from '@nickbarnette/dashui';
import React, { FC } from 'react';

export const InputGroup: FC = () => {
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: '1fr',
				columnGap: '2rem',
				rowGap: '2rem',
				marginBlockEnd: '2rem',
			}}
		>
			<Input value="" placeholder="Placeholder" />
			<Input
				value="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
				placeholder="Placeholder"
			/>
			<Input
				value="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
				placeholder="Placeholder"
				style={{ borderColor: 'var(--input-focus)' }}
			/>
		</div>
	);
};
