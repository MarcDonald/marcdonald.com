import { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import Link, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';

const MotionLink = motion(Link);

export const dropdownTextMotion: Variants = {
	rest: {
		x: 0,
		transition: {
			duration: 0.1,
			type: 'tween',
			ease: 'easeIn',
		},
	},
	hover: {
		x: 5,
		transition: {
			duration: 0.2,
			type: 'tween',
			ease: 'easeOut',
		},
	},
};

export function AnimatedLink({
	href,
	children,
	...props
}: { href: string } & PropsWithChildren & LinkProps) {
	return (
		<MotionLink
			className={'mr-2 h-full w-full text-sm'}
			href={href}
			initial={'rest'}
			whileHover={'hover'}
			animate={'rest'}
			{...props}
		>
			<motion.div
				className={'flex items-center justify-start'}
				variants={dropdownTextMotion}
			>
				{children}
			</motion.div>
		</MotionLink>
	);
}
