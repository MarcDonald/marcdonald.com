import type { LinksFunction } from '@remix-run/node';

import styles from './BreakpointHelper.css';

export const links: LinksFunction = () => [
	{
		rel: 'stylesheet',
		href: styles,
	},
];

export default function BreakpointHelper() {
	const display = (): boolean => {
		return process.env.NODE_ENV !== 'production';
	};

	return (
		<span
			style={{
				display: display() ? 'visible' : 'none',
			}}
			className={'breakpoint-helper'}
		/>
	);
}
