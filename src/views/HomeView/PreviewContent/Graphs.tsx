import React, { FC, useRef } from 'react';
import { BarChart, PieChart } from '@nickbarnette/dashui';

export const Graphs: FC = () => {
	const barRef = useRef<HTMLDivElement>(null);
	const pieRef = useRef<HTMLDivElement>(null);

	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(auto-fill, minmax(1rem, 30rem))',
				columnGap: '2rem',
				rowGap: '1rem',
			}}
		>
			<div
				style={{
					padding: '1rem',
					boxSizing: 'border-box',
					display: 'flex',
					maxWidth: '100%',
				}}
			>
				<div
					style={{
						flexGrow: 1,
						maxHeight: '20rem',
						maxWidth: '30rem',
						minHeight: 0,
						minWidth: 0,
					}}
					ref={barRef}
				>
					<BarChart
						containerRef={barRef}
						title="Chart Title"
						xAxisTitle="Axis Title"
						yAxisTitle="Axis Title"
						data={{
							min: 0,
							max: 100,
							bars: [
								{
									title: 'Bar 1',
									value: 20,
									color: 'var(--color-graph1)',
								},
								{
									title: 'Bar 2',
									value: 100,
									color: 'var(--color-graph2)',
								},
								{
									title: 'Bar 3',
									value: 50,
									color: 'var(--color-graph3)',
								},
								{
									title: 'Bar 4',
									value: 10,
									color: 'var(--color-graph4)',
								},
								{
									title: 'Bar 5',
									value: 60,
									color: 'var(--color-graph5)',
								},
							],
						}}
					/>
				</div>
			</div>
			<div
				style={{
					padding: '1rem',
					boxSizing: 'border-box',
					display: 'flex',
					maxWidth: '100%',
				}}
			>
				<div
					style={{
						flexGrow: 1,
						maxHeight: '20rem',
						maxWidth: '30rem',
						minHeight: 0,
						minWidth: 0,
					}}
					ref={pieRef}
				>
					<PieChart
						containerRef={pieRef}
						data={{
							total: 200,
							slices: [
								{
									title: '',
									value: 20,
									color: 'var(--color-graph1)',
								},
								{
									title: '',
									value: 40,
									color: 'var(--color-graph2)',
								},
								{
									title: '',
									value: 20,
									color: 'var(--color-graph3)',
								},
								{
									title: '',
									value: 60,
									color: 'var(--color-graph4)',
								},
								{
									title: '',
									value: 60,
									color: 'var(--color-graph5)',
								},
							],
						}}
					/>
				</div>
			</div>
		</div>
	);
};
