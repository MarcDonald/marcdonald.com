import {
	TypographyLink,
	TypographyMuted,
	TypographyP,
} from '@/app/components/ui/typography';
import { ProjectDetails, projects } from '@/app/config/project';
import Balancer from 'react-wrap-balancer';

const ProjectLink = ({ project }: { project: ProjectDetails }) => {
	return (
		<li className={'p-2'}>
			<TypographyP className={'mb-2'}>
				<Balancer>
					<TypographyLink
						className={'font-semibold hover:font-bold focus:font-bold'}
						href={project.link}
					>
						{project.title}
					</TypographyLink>
				</Balancer>
			</TypographyP>
			<TypographyMuted className={'text-base'}>
				{project.description}
			</TypographyMuted>
		</li>
	);
};

export default function ProjectList() {
	return (
		<ul className={'list-none p-0'}>
			{projects.map((proj) => (
				<ProjectLink key={proj.title} project={proj} />
			))}
		</ul>
	);
}
