import React, { FC } from 'react';

// Components
import { Heading, Label, Text } from '@nickbarnette/dashui';

export const Typography: FC = () => {
	return (
		<div
			style={{ flex: '1 1 auto', display: 'flex', flexDirection: 'row' }}
		>
			<div style={{ flex: '1 1 auto' }}>
				<Heading level={1}>Heading 1</Heading>
				<Heading level={2}>Heading 2</Heading>
				<Heading level={3}>Heading 3</Heading>
				<Heading level={4}>Heading 4</Heading>
				<Heading level={5}>Heading 5</Heading>
				<Heading level={6}>Heading 6</Heading>
			</div>
			<div
				style={{
					flex: '1 1 auto',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<Text style={{ maxWidth: '40rem' }}>
					Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s, when an unknown
					printer took a galley of type and scrambled it to make a
					type specimen book. It has survived not only five centuries,
					but also the leap into electronic typesetting, remaining
					essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum
					passages, and more recently with desktop publishing software
					like Aldus PageMaker including versions of Lorem Ipsum.
				</Text>
				<Label id="" style={{ marginBlockStart: '1rem' }}>
					Field Label
				</Label>
				<a style={{ marginBlockStart: '1rem' }}>Link</a>
			</div>
		</div>
	);
};
