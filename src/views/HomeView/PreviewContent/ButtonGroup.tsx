import { Button } from '@nickbarnette/dashui';
import React, { FC } from 'react';

export const ButtonGroup: FC<{
	variant: 'neutral' | 'primary' | 'secondary';
}> = (props) => {
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(auto-fill, minmax(1rem, 20rem))',
				columnGap: '2rem',
				rowGap: '1rem',
				marginBlockEnd: '2rem',
			}}
		>
			<Button
				onPress={() => {}}
				tooltip={`${props.variant} button`}
				style={{
					borderColor: `var(--pattern-${props.variant}-normal-bd)`,
					backgroundColor: `var(--pattern-${props.variant}-normal-bg)`,
					color: `var(--pattern-${props.variant}-normal-fg)`,
				}}
			>
				{props.variant.slice(0, 1).toUpperCase() +
					props.variant.slice(1)}{' '}
				Default
			</Button>
			<Button
				onPress={() => {}}
				tooltip={`${props.variant} button hovered`}
				style={{
					borderColor: `var(--pattern-${props.variant}-hover-bd)`,
					backgroundColor: `var(--pattern-${props.variant}-hover-bg)`,
					color: `var(--pattern-${props.variant}-hover-fg)`,
				}}
			>
				{props.variant.slice(0, 1).toUpperCase() +
					props.variant.slice(1)}{' '}
				Hover
			</Button>
			<Button
				onPress={() => {}}
				tooltip={`${props.variant} button pressed`}
				style={{
					borderColor: `var(--pattern-${props.variant}-pressed-bd)`,
					backgroundColor: `var(--pattern-${props.variant}-pressed-bg)`,
					color: `var(--pattern-${props.variant}-pressed-fg)`,
				}}
			>
				{props.variant.slice(0, 1).toUpperCase() +
					props.variant.slice(1)}{' '}
				Pressed
			</Button>
		</div>
	);
};
