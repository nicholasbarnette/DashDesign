import React, { FC } from 'react';

export const BarChart: FC = () => {
	const scale = 1;
	return (
		<div
			style={{
				backgroundColor: 'var(--color-ui-light)',
				border: '1px solid var(--color-neutral)',
				height: '10rem',
				width: '15rem',
				position: 'relative',
				padding: '0.5rem',
			}}
		>
			<p
				style={{
					width: '100%',
					textAlign: 'center',
					left: 0,
					position: 'absolute',
				}}
			>
				Chart Title
			</p>
			<p
				style={{
					width: 'auto',
					left: '-0.5rem',
					top: '50%',
					transform: 'rotate(-90deg)',
					fontSize: 'var(--font-size-sm)',
					position: 'absolute',
				}}
			>
				Axis Title
			</p>
			<p
				style={{
					width: '100%',
					textAlign: 'center',
					position: 'absolute',
					bottom: '0.25rem',
					fontSize: 'var(--font-size-sm)',
				}}
			>
				Axis Title
			</p>
			<div
				style={{ position: 'relative', height: '100%', width: '100%' }}
			>
				<div
					style={{
						position: 'absolute',
						bottom: '1.5rem',
						borderBottom: '1px solid var(--color-neutral)',
						width: 'calc(100% - 3rem)',
						left: '1.5rem',
						zIndex: 1,
					}}
				></div>
				<div
					style={{
						backgroundColor: 'var(--color-graph1)',
						height: '25%',
						width: '1rem',
						position: 'absolute',
						bottom: '1.5rem',
						left: '2.5rem',
					}}
				></div>
				<div
					style={{
						backgroundColor: 'var(--color-graph2)',
						height: '45%',
						width: '1rem',
						position: 'absolute',
						bottom: '1.5rem',
						left: '4.5rem',
					}}
				></div>
				<div
					style={{
						backgroundColor: 'var(--color-graph3)',
						height: '60%',
						width: '1rem',
						position: 'absolute',
						bottom: '1.5rem',
						left: '6.5rem',
					}}
				></div>
				<div
					style={{
						backgroundColor: 'var(--color-graph4)',
						height: '50%',
						width: '1rem',
						position: 'absolute',
						bottom: '1.5rem',
						left: '8.5rem',
					}}
				></div>
				<div
					style={{
						backgroundColor: 'var(--color-graph5)',
						height: '35%',
						width: '1rem',
						position: 'absolute',
						bottom: '1.5rem',
						left: '10.5rem',
					}}
				></div>
			</div>
		</div>
	);
};
