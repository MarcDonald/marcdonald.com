'use client';
import { Button } from '@/app/components/ui/button';
import { useRouter } from 'next/navigation';

export function SkipToContentButton() {
	const router = useRouter();
	return (
		<Button
			onClick={async () => {
				router.replace('#main-content', {
					scroll: true,
				});
			}}
		>
			Skip to Content
		</Button>
	);
}
