import React, { FC } from 'react';

export const InputGroup: FC = () => {
	const inputStyles = {
		borderWidth: '1px',
		borderStyle: 'solid',
		borderRadius: '0.125rem',
		padding: '0.5rem 1rem',
		backgroundColor: 'var(--input-bg)',
		color: 'var(--input-fg)',
		borderColor: 'var(--input-bd)',
		fontSize: 'var(--font-size-md)',
	};
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: '1fr',
				columnGap: '2rem',
				rowGap: '2rem',
			}}
		>
			<input
				type="text"
				placeholder="Placeholder"
				style={{ ...inputStyles }}
			/>
			<input
				type="text"
				placeholder="Placeholder"
				value="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
				style={{ ...inputStyles }}
			/>
			<input
				type="text"
				placeholder="Placeholder"
				value="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
				style={{ ...inputStyles, borderColor: 'var(--input-focus-bd)' }}
			/>
		</div>
	);
};
