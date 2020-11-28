import React, { FC, CSSProperties } from 'react';
import { ColorPicker, Theme } from '@nickbarnette/dashui';

// Styles
import cx from 'classnames';
import cn from './Chip.scss';

export interface ChipProps {
	className?: string;
	testId?: string;
	tooltip?: string;
	style?: CSSProperties;
	name: string;
	color: string;
	onChange: (color: string) => void;
}

export const Chip: FC<ChipProps> = (props) => {
	return (
		<div
			className={cx(cn.container, props.className)}
			data-testid={props.testId}
			style={{ ...props.style }}
		>
			<ColorPicker
				onChange={(val) => props.onChange(val)}
				color={props.color}
			/>
			<p className={cn.name}>{props.name}</p>
		</div>
	);
};
