import Link from 'next/link';
import { Button } from './ui/button';
import { DownloadIcon, GithubIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const DownloadSection = ({
	githubSlug,
	className,
}: {
	githubSlug: string;
	className?: string;
}) => {
	return (
		<div className={cn('mt-4 flex gap-4', className)}>
			<Link href={`https://github.com/${githubSlug}`} className={'w-full'}>
				<Button className={'w-full'} variant="outline" tabIndex={-1}>
					<GithubIcon className="mr-2 h-4 w-4" /> GitHub
				</Button>
			</Link>
			<Link
				href={`https://github.com/${githubSlug}/releases/latest`}
				className={'w-full'}
			>
				<Button className={'w-full'} tabIndex={-1}>
					<DownloadIcon className="mr-2 h-4 w-4" /> Download
				</Button>
			</Link>
		</div>
	);
};

export default DownloadSection;
