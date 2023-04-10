import { type AppType } from 'next/app';

import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import RootNavigationMenu from '@/components/RootNavigationMenu';
const inter = Inter({ subsets: ['latin'] });

const MainApp: AppType = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<title>Marc Donald</title>
			</Head>
			<div className={inter.className}>
				<RootNavigationMenu />
				<Component {...pageProps} />
			</div>
		</>
	);
};

export default MainApp;
export { reportWebVitals } from 'next-axiom';
