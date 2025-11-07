import { projects } from '@/app/config/project';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/app/components/ui/card';
import Link from 'next/link';

export default function ProjectList() {
	return (
		<ul
			className={'grid w-full list-none grid-cols-1 gap-2 p-2 md:grid-cols-3'}
		>
			{projects.map((proj) => (
				<li key={proj.title}>
					<Link
						href={proj.link}
						aria-label={proj.title}
						aria-description={proj.description}
					>
						<Card
							className={
								'focus:border-b-primary hover:border-b-primary gap-2 border-b-2 transition-all'
							}
						>
							<CardHeader className={'flex flex-row items-center gap-2'}>
								{<proj.icon size={20} />}
								<CardTitle className={'font-display font-extrabold'}>
									<h4>{proj.title}</h4>
								</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription>
									<p>{proj.description}</p>
								</CardDescription>
							</CardContent>
						</Card>
					</Link>
				</li>
			))}
		</ul>
	);
}
