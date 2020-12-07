import React, { FC, useState } from 'react';
import PreviewAppContainer from '../PreviewApp';

// Components
import { Text, Theme, Input, Label, Button } from '@nickbarnette/dashui';
import { Chip } from '../../../components/Chip';

// Styles
import cn from './PaletteContent.scss';

export interface PaletteContentProps {
	theme: Theme;
	updateTheme: (theme: Theme) => void;
}

export const PaletteContent: FC<PaletteContentProps> = (props) => {
	const [fontSize, setFontSize] = useState(
		`${props.theme.theme['font-size'].fontSizeBase}`,
	);
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
									style={{ flexGrow: 1 }}
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
									style={{ flexGrow: 1 }}
								/>
							);
						}
					})}
				</div>

				<p className={cn.groupTitle}>UI Colors</p>
				<div className={cn.chipContainer}>
					{Object.keys(props.theme.theme.background).map((key) => {
						if (
							typeof props.theme.theme.background[
								key as keyof Theme['theme']['background']
							] === 'string'
						) {
							return;
						}
						return (
							<Chip
								key={key}
								name={key}
								onChange={(val) => {
									props.updateTheme({
										...props.theme,
										theme: {
											...props.theme.theme,
											background: {
												...props.theme.theme.background,
												[key]: val,
											},
										},
									});
								}}
								color={
									props.theme.theme.background[
										key as keyof Theme['theme']['background']
									]
								}
								style={{ flexGrow: 1 }}
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
								style={{ flexGrow: 1 }}
							/>
						);
					})}
				</div>

				<p className={cn.groupTitle}>Layout Sizes</p>
				<div className={cn.layoutGroup}>
					<Label id="font-size">Base Font Size:</Label>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							marginBlockEnd: '2rem',
						}}
					>
						<Input
							id="font-size"
							style={{ width: '100%', maxWidth: '4rem' }}
							value={fontSize}
							onChange={(val) => setFontSize(val)}
						/>
						<Text style={{ marginInlineStart: '0.5rem' }}>px</Text>
						<Button
							tooltip="Update font size"
							style={{ marginInlineStart: '1rem' }}
							onPress={() => {
								const num = parseInt(fontSize, 10);
								props.updateTheme({
									...props.theme,
									theme: {
										...props.theme.theme,
										'font-size': {
											...props.theme.theme['font-size'],
											fontSizeBase: num,
										},
									},
								});
							}}
						>
							Update
						</Button>
					</div>
				</div>
			</div>
			<div
				style={{
					flexGrow: 1,
					flexBasis: '70%',
					overflow: 'hidden',
					minWidth: '10rem',
					maxHeight: '100%',
					paddingInlineStart: '2rem',
				}}
			>
				<PreviewAppContainer />
			</div>
		</div>
	);
};
