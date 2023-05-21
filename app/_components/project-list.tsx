import {
	TypographyLink,
	TypographyMuted,
	TypographyP,
} from '@/components/ui/typography';
import { ProjectDetails, projects } from '@/config/project';

const ProjectLink = ({ project }: { project: ProjectDetails }) => {
	return (
		<li className={'p-2'}>
			<TypographyP>
				<TypographyLink href={project.link}>{project.title}</TypographyLink>
			</TypographyP>
			<TypographyMuted>{project.description}</TypographyMuted>
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
