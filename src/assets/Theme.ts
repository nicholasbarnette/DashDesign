import { Theme } from '@nickbarnette/dashui';

export const DefaultCustomTheme: Theme = {
	baseTheme: 'light',
	type: 'default',
	theme: {
		core: {
			baseSize: 16,
		},
		color: {
			neutral: '#000000',
			primary: '#7800d2',
			secondary: '#258fd8',
			alert: '#FF6464',
			warning: '#FFB444',
			success: '#2DB643',
			graph1: '#FE5757',
			graph2: '#BE6CFF',
			graph3: '#00ACD1',
			graph4: '#E8A700',
			graph5: '#04B100',
		},
		spacing: {
			spacingBase: 16,
			spacingMultiplier: 1,
		},
		'font-size': {
			fontSizeBase: 16,
			fontSizeMultiplier: 1,
		},
		background: {
			page: '#ffffff',
			navigation: '#000000',
			container: '#dedede',
			content: '#ffffff',
			'overlay-neutral': 'rgba(0, 0, 0, 0.25)',
			'overlay-primary': 'rgba(120, 0, 210, 0.25)',
			shadow: '0px 2px 10px -4px rgba(0, 0, 0, 0.5)',
		},
		text: {
			default: '#131722',
			alternate: '#131722',
			inverse: '#ffffff',
			placeholder: '#a1a1a1',
			label: '#333333',
		},
		'pattern-neutral': {
			normal: {
				bd: 'hsla(0, 0%, 0%, 1)',
				bg: 'hsla(0, 0%, 0%, 1)',
				fg: '#ffffff',
				op: '1',
			},
			hover: {
				bd: 'hsla(0, 0%, 0%, 0.85)',
				bg: 'hsla(0, 0%, 0%, 0.85)',
				fg: '#ffffff',
				op: '1',
			},
			pressed: {
				bd: 'hsla(0, 0%, 0%, 0.75)',
				bg: 'hsla(0, 0%, 0%, 0.75)',
				fg: '#ffffff',
				op: '1',
			},
			disabled: {
				bd: 'hsla(0, 0%, 0%, 1)',
				bg: 'hsla(0, 0%, 0%, 1)',
				fg: '#ffffff',
				op: '0.3',
			},
		},
		'pattern-primary': {
			normal: {
				bd: 'hsla(274, 100%, 41%, 1)',
				bg: 'hsla(274, 100%, 41%, 1)',
				fg: '#ffffff',
				op: '1',
			},
			hover: {
				bd: 'hsla(274, 100%, 41%, 0.85)',
				bg: 'hsla(274, 100%, 41%, 0.85)',
				fg: '#ffffff',
				op: '1',
			},
			pressed: {
				bd: 'hsla(274, 100%, 41%, 0.75)',
				bg: 'hsla(274, 100%, 41%, 0.75)',
				fg: '#ffffff',
				op: '1',
			},
			disabled: {
				bd: 'hsla(274, 100%, 41%, 1)',
				bg: 'hsla(274, 100%, 41%, 1)',
				fg: '#ffffff',
				op: '0.3',
			},
		},
		'pattern-secondary': {
			normal: {
				bd: 'hsla(204, 71%, 50%, 1)',
				bg: 'hsla(204, 71%, 50%, 1)',
				fg: '#ffffff',
				op: '1',
			},
			hover: {
				bd: 'hsla(204, 71%, 50%, 0.85)',
				bg: 'hsla(204, 71%, 50%, 0.85)',
				fg: '#ffffff',
				op: '1',
			},
			pressed: {
				bd: 'hsla(204, 71%, 50%, 0.75)',
				bg: 'hsla(204, 71%, 50%, 0.75)',
				fg: '#ffffff',
				op: '1',
			},
			disabled: {
				bd: 'hsla(204, 71%, 50%, 1)',
				bg: 'hsla(204, 71%, 50%, 1)',
				fg: '#ffffff',
				op: '0.3',
			},
		},
		'pattern-lightweight': {
			normal: {
				bd: 'hsla(0, 0%, 0%, 0)',
				bg: 'hsla(0, 0%, 0%, 0)',
				fg: '#000000',
				op: '1',
			},
			hover: {
				bd: 'hsla(0, 0%, 0%, 0.25)',
				bg: 'hsla(0, 0%, 0%, 0.25)',
				fg: '#000000',
				op: '1',
			},
			pressed: {
				bd: 'hsla(0, 0%, 0%, 0.35)',
				bg: 'hsla(0, 0%, 0%, 0.35)',
				fg: '#000000',
				op: '1',
			},
			disabled: {
				bd: 'hsla(0, 0%, 0%, 0)',
				bg: 'hsla(0, 0%, 0%, 0)',
				fg: '#000000',
				op: '0.3',
			},
		},
		input: {
			bd: '#000000',
			bg: 'hsla(0, 100%, 100%, 1)',
			fg: '#000000',
			focus: '#258fd8',
		},
		focus: {
			width: '1px',
			style: 'dotted',
			light: '#ffffff',
			dark: '#000000',
		},
	},
};
