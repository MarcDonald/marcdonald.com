'use client';

import { useEffect, useState } from 'react';
import { isProduction } from '../config/site';

export function VisuallyHidden({ text }: { text: string }) {
	const [forceShow, setForceShow] = useState(false);

	useEffect(() => {
		// noinspection JSUnresolvedReference
		if (isProduction()) {
			return;
		}

		const handleKeyDown = (ev: KeyboardEvent) => {
			if (ev.key === 'Alt') {
				setForceShow(true);
			}
		};
		const handleKeyUp = (ev: KeyboardEvent) => {
			if (ev.key === 'Alt') {
				setForceShow(false);
			}
		};
		window.addEventListener('keydown', handleKeyDown);
		window.addEventListener('keyup', handleKeyUp);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
			window.removeEventListener('keyup', handleKeyUp);
		};
	}, []);

	if (forceShow) {
		return text;
	}

	return (
		<span
			style={{
				display: 'inline-block',
				position: 'absolute',
				overflow: 'hidden',
				clip: 'rect(0 0 0 0)',
				height: 1,
				width: 1,
				margin: -1,
				padding: 0,
				border: 0,
			}}
		>
			{text}
		</span>
	);
}
