import './styles/globals.css';
import { type Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	title: 'Marc Donald',
	description: 'Software Engineer',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
