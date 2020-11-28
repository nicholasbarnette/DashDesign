import React, { FC } from 'react';

export const ButtonGroup: FC<{ variant: 'neutral' | 'primary' | 'secondary' }> = (
	props,
) => {
	const buttonStyles = {
		borderWidth: '1px',
		borderStyle: 'solid',
		borderRadius: '0.125rem',
		padding: '0.5rem 1rem',
	};
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: '1fr 1fr 1fr',
				columnGap: '2rem',
				marginBlockEnd: '2rem',
			}}
		>
			<button
				style={{
					...buttonStyles,
					borderColor: `var(--${props.variant}-bd)`,
					backgroundColor: `var(--${props.variant}-bg)`,
					color: `var(--${props.variant}-fg)`,
				}}
			>
				{props.variant.slice(0, 1).toUpperCase() +
					props.variant.slice(1)}{' '}
				Default
			</button>
			<button
				style={{
					...buttonStyles,
					borderColor: `var(--${props.variant}-hover-bd)`,
					backgroundColor: `var(--${props.variant}-hover-bg)`,
					color: `var(--${props.variant}-hover-fg)`,
				}}
			>
				{props.variant.slice(0, 1).toUpperCase() +
					props.variant.slice(1)}{' '}
				Hover
			</button>
			<button
				style={{
					...buttonStyles,
					borderColor: `var(--${props.variant}-pressed-bd)`,
					backgroundColor: `var(--${props.variant}-pressed-bg)`,
					color: `var(--${props.variant}-pressed-fg)`,
				}}
			>
				{props.variant.slice(0, 1).toUpperCase() +
					props.variant.slice(1)}{' '}
				Pressed
			</button>
		</div>
	);
};