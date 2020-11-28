import React, { FC, CSSProperties } from 'react';

// Components
import {
	SVG,
	Instagram,
	Twitter,
	LinkedIn,
	GitHub,
	Letter,
} from '@nickbarnette/dashui';

// Styles
import cx from 'classnames';
import cn from './Social.scss';

export type SocialType =
	| 'Instagram'
	| 'Twitter'
	| 'GitHub'
	| 'LinkedIn'
	| 'Email';

interface SocialProps {
	className?: string;
	style?: CSSProperties;
	testId?: string;
	social: SocialType;
	link: string;
	handle: string;
}

export const Social: FC<SocialProps> = (props) => {
	let social = getSocialIcon(props.social);

	return (
		<a
			href={`${props.social === 'Email' ? 'mailto:' : ''}${props.link}`}
			target="_blank"
			className={cx(cn.social, props.className)}
			title={props.handle}
		>
			{social}
			<p>{props.handle}</p>
		</a>
	);
};

const getSocialIcon = (social: SocialType) => {
	switch (social) {
		case 'Instagram':
			return (
				<SVG
					svg={Instagram}
					tooltip="Instagram logo"
					className={cn.icon}
				/>
			);
		case 'Twitter':
			return (
				<SVG svg={Twitter} tooltip="Twitter logo" className={cn.icon} />
			);
		case 'GitHub':
			return (
				<SVG svg={GitHub} tooltip="GitHub logo" className={cn.icon} />
			);
		case 'LinkedIn':
			return (
				<SVG
					svg={LinkedIn}
					tooltip="LinkedIn logo"
					className={cn.icon}
				/>
			);
		case 'Email':
			return (
				<SVG svg={Letter} tooltip="Email logo" className={cn.icon} />
			);
		default:
			return null;
	}
};
