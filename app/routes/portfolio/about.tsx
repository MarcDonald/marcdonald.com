// noinspection JSUnusedGlobalSymbols

export default function AboutMeRoute() {
	return (
		<div style={{ textAlign: 'center', padding: '3rem' }}>
			<h2
				style={{
					fontSize: '3rem',
					color: 'var(--color-text-on-page-background)',
				}}
			>
				{"I'm"} pretty cool
			</h2>
			<p
				style={{
					fontSize: '1.5rem',
					color: 'var(--color-text-on-page-background)',
				}}
			>
				Check out one of my projects for proof {'->'}
			</p>
		</div>
	);
}
