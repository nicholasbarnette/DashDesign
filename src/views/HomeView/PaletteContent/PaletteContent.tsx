import { Theme } from '@nickbarnette/dashui';

import React, { FC } from 'react';

// Components
import { Text, Heading } from '@nickbarnette/dashui';
import { Chip } from '../../../components/Chip';

// Styles
import cn from './PaletteContent.scss';

export interface PaletteContentProps {
	theme: Theme;
	updateTheme: (theme: Theme) => void;
}

export const PaletteContent: FC<PaletteContentProps> = (props) => {
	return (
		<div className={cn.stylesContainer}>
			<div className={cn.colorContainer}>
				<p className={cn.groupTitle}>Base Colors</p>
				<div className={cn.chipContainer}>
					{Object.keys(props.theme.theme.color).map((key) => {
						if (
							!key.includes('graph') &&
							key in props.theme.theme.color
						) {
							return (
								<Chip
									key={key}
									name={key}
									onChange={(val) =>
										props.updateTheme({
											...props.theme,
											theme: {
												...props.theme.theme,
												color: {
													...props.theme.theme.color,
													[key]: val,
												},
											},
										})
									}
									color={
										props.theme.theme.color[
											key as keyof Theme['theme']['color']
										]
									}
								/>
							);
						}
					})}
				</div>

				<p className={cn.groupTitle}>Graph Colors</p>
				<div className={cn.chipContainer}>
					{Object.keys(props.theme.theme.color).map((key) => {
						if (key.includes('graph')) {
							return (
								<Chip
									key={key}
									name={key}
									onChange={(val) =>
										props.updateTheme({
											...props.theme,
											theme: {
												...props.theme.theme,
												color: {
													...props.theme.theme.color,
													[key]: val,
												},
											},
										})
									}
									color={
										props.theme.theme.color[
											key as keyof Theme['theme']['color']
										]
									}
								/>
							);
						}
					})}
				</div>

				<p className={cn.groupTitle}>UI Colors</p>
				<div className={cn.chipContainer}>
					{Object.keys(props.theme.theme.background).map((key) => {
						return (
							<Chip
								key={key}
								name={key}
								onChange={(val) =>
									props.updateTheme({
										...props.theme,
										theme: {
											...props.theme.theme,
											background: {
												...props.theme.theme.background,
												[key]: val,
											},
										},
									})
								}
								color={
									props.theme.theme.background[
										key as keyof Theme['theme']['background']
									]
								}
							/>
						);
					})}
				</div>

				<p className={cn.groupTitle}>Text Colors</p>
				<div className={cn.chipContainer}>
					{Object.keys(props.theme.theme.text).map((key) => {
						return (
							<Chip
								key={key}
								name={key}
								onChange={(val) =>
									props.updateTheme({
										...props.theme,
										theme: {
											...props.theme.theme,
											text: {
												...props.theme.theme.text,
												[key]: val,
											},
										},
									})
								}
								color={
									props.theme.theme.text[
										key as keyof Theme['theme']['text']
									]
								}
							/>
						);
					})}
				</div>
			</div>
			<div className={cn.textContainer}>
				<p className={cn.groupTitle}>Font Sizes</p>
				<div className={cn.fontSizeContainer}>
					<Text style={{ fontSize: 'var(--font-size-xxl)' }}>
						Sample text (xxl)
					</Text>
					<Text style={{ fontSize: 'var(--font-size-xl)' }}>
						Sample text (xl)
					</Text>
					<Text style={{ fontSize: 'var(--font-size-lg)' }}>
						Sample text (lg)
					</Text>
					<Text>Sample text (md)</Text>
					<Text style={{ fontSize: 'var(--font-size-sm)' }}>
						Sample text (sm)
					</Text>
					<Text style={{ fontSize: 'var(--font-size-xs)' }}>
						Sample text (xs)
					</Text>
					<Text style={{ fontSize: 'var(--font-size-xxs)' }}>
						Sample text (xxs)
					</Text>
				</div>

				<p className={cn.groupTitle}>Headings</p>
				<div className={cn.headingContainer}>
					<Heading level={1}>Heading 1</Heading>
					<Heading level={3}>Heading 3</Heading>
					<Heading level={5}>Heading 5</Heading>
				</div>

				<p className={cn.groupTitle}>Body Text</p>
				<div className={cn.bodyContainer}>
					<Text>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has
						survived not only five centuries, but also the leap into
						electronic typesetting, remaining essentially unchanged.
						It was popularised in the 1960s with the release of
						Letraset sheets containing Lorem Ipsum passages, and
						more recently with desktop publishing software like
						Aldus PageMaker including versions of Lorem Ipsum.
					</Text>
				</div>
			</div>
		</div>
	);
};
