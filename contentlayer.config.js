import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
	slug: {
		type: 'string',
		resolve: (guide) => `/${guide._raw.flattenedPath}`,
	},
	slugAsParams: {
		type: 'string',
		resolve: (guide) => guide._raw.flattenedPath.split('/').slice(1).join('/'),
	},
};

export const Project = defineDocumentType(() => ({
	name: 'Project',
	filePathPattern: `projects/**/*.mdx`,
	contentType: 'mdx',
	fields: {
		title: {
			type: 'string',
			required: true,
		},
		description: {
			type: 'string',
		},
		link: {
			type: 'string',
		},
		image: {
			type: 'string',
			required: false,
		},
		keywords: {
			type: 'list',
			of: { type: 'string' },
		},
		downloadGitHubSlug: {
			type: 'string',
			required: false,
		},
	},
	computedFields,
}));

export default makeSource({
	contentDirPath: './content',
	documentTypes: [Project],
	mdx: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [
			rehypeSlug,
			[
				rehypePrettyCode,
				{
					theme: 'one-dark-pro',
					onVisitLine(node) {
						// Prevent lines from collapsing in `display: grid` mode, and allow empty
						// lines to be copy/pasted
						if (node.children.length === 0) {
							node.children = [{ type: 'text', value: ' ' }];
						}
					},
					onVisitHighlightedLine(node) {
						node.properties.className.push('line--highlighted');
					},
					onVisitHighlightedWord(node) {
						node.properties.className = ['word--highlighted'];
					},
				},
			],
			[
				rehypeAutolinkHeadings,
				{
					properties: {
						className: ['subheading-anchor'],
						ariaLabel: 'Link to section',
					},
				},
			],
		],
	},
});
