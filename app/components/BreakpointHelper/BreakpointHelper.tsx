import { cn } from '~/util/style.util';

export default function BreakpointHelper() {
	const display = (): boolean => {
		return process.env.NODE_ENV !== 'production';
	};

	return (
		<span
			id={'breakpoint-helper'}
			className={cn(
				'fixed top-0 m-1 inline rounded-md bg-yellow-300 p-1 text-sm text-black opacity-50',
				display() ? 'block' : 'none'
			)}
		/>
	);
}
