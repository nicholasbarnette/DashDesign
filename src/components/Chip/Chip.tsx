import React, { FC, CSSProperties } from 'react';

// Styles
import cx from 'classnames';
import cn from './Chip.scss';

export interface ChipProps {
	className?: string;
	testId?: string;
	tooltip?: string;
	style?: CSSProperties;
	name: string;
	bg?: string;
}

export const Chip: FC<ChipProps> = (props) => {
	return (
		<div
			className={cx(cn.container, props.className)}
			data-testid={props.testId}
			style={{ ...props.style, '--chip-bg': props.bg }}
		>
			<div className={cn.chip}></div>
			<p className={cn.name}>{props.name}</p>
		</div>
	);
};
