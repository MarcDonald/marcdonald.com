import React from 'react';

export default function BlogHeaderShell({ children }: React.PropsWithChildren) {
	return (
		<div className="mx-auto w-full min-w-0">
			<div className="space-y-2">{children}</div>
		</div>
	);
}
