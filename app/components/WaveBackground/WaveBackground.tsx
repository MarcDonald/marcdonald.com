import type { LinksFunction } from '@remix-run/node';
import React from 'react';

import styles from './WaveBackground.css';

export const links: LinksFunction = () => [
	{
		rel: 'stylesheet',
		href: styles,
	},
];

export default function WaveBackground() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1440 320"
			className={'wave-background'}
		>
			<path
				fillOpacity="1"
				d="M0,128L48,112C96,96,192,64,288,96C384,128,480,224,576,229.3C672,235,768,149,864,122.7C960,96,1056,128,1152,138.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
			></path>
		</svg>
	);
}
