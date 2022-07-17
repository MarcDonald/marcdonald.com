import type { LinksFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

import styles from './Navigation.css';

export const links: LinksFunction = () => [
	{
		rel: 'stylesheet',
		href: styles,
	},
];

export default function Navigation() {
	return (
		<nav>
			<ul>
				<li>
					<Link to="hibi">Hibi</Link>
				</li>
				<li>
					<Link to="event-management-system">Event Management System</Link>
				</li>
				<li>
					<Link to="twitch-spotify-bot">Twitch Chat Spotify Bot</Link>
				</li>
			</ul>
		</nav>
	);
}
