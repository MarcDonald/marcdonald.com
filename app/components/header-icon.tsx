'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import icon from '@/app/icon.png';
import { VisuallyHidden } from '@/app/components/visually-hidden';

export default function HeaderIcon() {
	return (
		<Link href={'/'} className={'rounded-md p-2'}>
			<motion.div
				whileHover={{
					scale: [null, 1.25, 1.2],
					transition: {
						duration: 0.4,
						times: [0, 0.5, 1],
					},
				}}
			>
				<Image src={icon} alt={'Chibi icon of marc'} width={32} height={32} />
			</motion.div>
			<VisuallyHidden text={'Back home'} />
		</Link>
	);
}
