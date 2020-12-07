import React, { FC, CSSProperties, useMemo } from 'react';
import {
	ColorPicker,
	getColorArray,
	getHSLColorString,
	HSL,
} from '@nickbarnette/dashui';

// Styles
import cx from 'classnames';
import cn from './Chip.scss';

export interface ChipProps {
	className?: string;
	testId?: string;
	tooltip?: string;
	style?: CSSProperties;
	name: string;
	color: HSL | string;
	onChange: (color: HSL | string) => void;
}

export const Chip: FC<ChipProps> = (props) => {
	const color = useMemo(() => {
		const c = props.color;
		if (c.length === 3) {
			return getHSLColorString(c as HSL);
		} else {
			return `${c}`;
		}
	}, [props.color]);

	return (
		<div
			className={cx(cn.container, props.className)}
			data-testid={props.testId}
			style={{ ...props.style }}
		>
			<ColorPicker
				onChange={(val) => {
					const c = getColorArray(val);
					if (c) {
						props.onChange(c);
					} else {
						props.onChange(val);
					}
				}}
				color={color}
			/>
			<p className={cn.name}>{props.name}</p>
		</div>
	);
};
