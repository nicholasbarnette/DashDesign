import React, { FC } from 'react';
import { SVG, Twitter, Error404, Profile, Letter } from '@nickbarnette/dashui';

export const IconGroup: FC<{}> = (props) => {
	const iconStyles = {
		height: '3rem',
		width: '3rem',
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
			<SVG svg={Twitter} tooltip="" style={{ ...iconStyles }} />
			<SVG
				svg={Error404}
				tooltip=""
				style={{ ...iconStyles }}
				customColor={{
					default: 'var(--color-alert)',
					inverse: 'var(--text-default)',
				}}
			/>
			<SVG
				svg={Profile}
				tooltip=""
				style={{ ...iconStyles }}
				customColor={{
					default: 'var(--color-warning)',
					inverse: 'var(--text-default)',
				}}
			/>
			<SVG
				svg={Letter}
				tooltip=""
				style={{ ...iconStyles }}
				customColor={{
					default: 'var(--color-success)',
					inverse: 'var(--text-default)',
				}}
			/>
		</div>
	);
};
