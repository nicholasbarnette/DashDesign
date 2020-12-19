import React, { FC, useEffect, useState } from 'react';
import PreviewAppContainer from '../PreviewApp';

// Components
import {
	Text,
	Theme,
	Input,
	Label,
	Button,
	Dialog,
	TextArea,
} from '@nickbarnette/dashui';
import { Chip } from '../../../components/Chip';

// Styles
import cn from './PaletteContent.scss';

export interface PaletteContentProps {
	theme: Theme;
	updateTheme: (theme: Theme) => void;
}

const copyToClipboard = (text: string) => {
	let dummy = document.createElement('textarea');
	dummy.style.position = 'absolute';
	dummy.style.left = '-9999px';
	document.body.appendChild(dummy);
	dummy.value = text;
	dummy.select();
	document.execCommand('copy');
	document.body.removeChild(dummy);
};

export const PaletteContent: FC<PaletteContentProps> = (props) => {
	const [fontSize, setFontSize] = useState(
		`${props.theme.theme['font-size'].fontSizeBase}`,
	);
	const [dialogOpen, setDialogOpen] = useState(false);
	const [themeText, setThemeText] = useState(
		JSON.stringify(props.theme, null, 4),
	);

	useEffect(() => {
		setThemeText(JSON.stringify(props.theme, null, 4));
	}, [props.theme]);

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
				<Button
					onPress={() => setDialogOpen(!dialogOpen)}
					tooltip="View theme"
				>
					View Theme Object
				</Button>
				<Dialog
					title="Theme Obejct"
					showDialog={dialogOpen}
					closeButton={{
						text: 'Close',
						props: {
							tooltip: 'Close dialog',
							onPress: () => setDialogOpen(false),
						},
					}}
					width="768px"
					style={{ height: '600px' }}
				>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<Text>
							The JSON object below contains the data used to load
							the custom theme that you have created. You may also
							paste a previously created custom theme below to
							load it.
						</Text>
						<div
							style={{
								marginBlockStart: '2rem',
								display: 'flex',
							}}
						>
							<Button
								tooltip="Copy theme"
								onPress={() => {
									try {
										copyToClipboard(themeText);
									} catch (e) {}
								}}
							>
								Copy Theme
							</Button>
							<Button
								tooltip="Load theme"
								style={{ marginInlineStart: '1rem' }}
								onPress={() => {
									try {
										props.updateTheme(
											JSON.parse(themeText),
										);
									} catch (e) {}
								}}
							>
								Load Theme
							</Button>
						</div>
						<TextArea
							value={themeText}
							style={{
								maxWidth: '100%',
								width: '100%',
								flexGrow: 1,
								marginBlockStart: '1rem',
							}}
							onChange={(val) => setThemeText(val)}
						/>
					</div>
				</Dialog>
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
