import { Head, Html, Main, NextScript } from 'next/document';

const title = 'Marc Donald';
const description = 'Senior Software Engineer';
export default function Document() {
	return (
		<Html
			className={`relative min-h-screen bg-white font-sans text-slate-900 dark:bg-slate-800 dark:text-slate-50`}
		>
			<Head>
				<meta name="description" content={description} />
				<meta
					name="keywords"
					content="software engineer,portfolio,developer,marc donald,programming,web development,full stack,fullstack,react,reactjs,typescript,js,java,html,css,frontend,backend,full stack,fullstack,full-stack"
				/>
				<meta name="twitter:title" content={title} />
				<meta name="twitter:description" content={description} />
				<meta name="twitter:creator" content="@DeveloperMarc" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
