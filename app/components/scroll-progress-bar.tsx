'use client';

import { motion, useScroll } from 'framer-motion';

export default function ScrollProgressBar() {
	const { scrollYProgress } = useScroll();
	// noinspection JSSuspiciousNameCombination
	return (
		<motion.div
			style={{
				scaleX: scrollYProgress,
				transformOrigin: '0%',
			}}
			className={
				'sticky left-0 right-0 top-14 isolate z-40 -m-6 mb-6 h-1 bg-primary'
			}
		/>
	);
}
