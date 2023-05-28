import { cn } from '@/app/lib/utils';

const WipBanner = ({ className }: { className?: string }) => {
	return (
		<div className={cn('border-b bg-secondary p-2 text-center', className)}>
			🚧 This Page is under construction 🚧
		</div>
	);
};

export default WipBanner;
