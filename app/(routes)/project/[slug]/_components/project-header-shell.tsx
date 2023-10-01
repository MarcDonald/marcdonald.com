import React from 'react';

export default function ProjectHeaderShell({
	children,
}: React.PropsWithChildren) {
	return (
		<header className="mx-auto w-full min-w-0">
			<div className="space-y-2">{children}</div>
		</header>
	);
}
