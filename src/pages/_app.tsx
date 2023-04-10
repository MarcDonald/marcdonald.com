import { type AppType } from 'next/app';

import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import RootNavigationMenu from '@/components/RootNavigationMenu';
import { TooltipProvider } from '@/components/ui/Tooltip';
const inter = Inter({ subsets: ['latin'] });

const MainApp: AppType = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<title>Marc Donald</title>
			</Head>
			<div className={`${inter.className} m-auto max-w-[1800px]`}>
				<TooltipProvider>
					<RootNavigationMenu />
					<Component {...pageProps} />
				</TooltipProvider>
			</div>
		</>
	);
};

export default MainApp;
export { reportWebVitals } from 'next-axiom';
