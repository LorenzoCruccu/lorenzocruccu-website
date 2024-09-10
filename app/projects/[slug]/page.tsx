import { projectsData } from "@/lib/data";
import fs from 'fs';
import { compileMDX } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from "next/navigation";
import path from 'path';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import AnimatedImage from '../_components/AnimatedImage';
import ProjectTitle from '../_components/Title';

const projectsDirectory = path.join(process.cwd(), 'app/projects');

export default async function ProjectPage({ params }: { params: { slug: string } }) {
	const { slug } = params;

	const projectData = projectsData.find(project => project.slug === slug)!;

	if (projectData.isDraft) {
		return (
			<div className="flex justify-center items-center h-screen">
				<div className="text-center">
					<h1 className="text-3xl font-bold mb-4 dark:text-white">Page Under Construction</h1>
					<p className="text-lg dark:text-gray-400">The project documentation is still in progress! Stay tuned for updates.</p>
				</div>
			</div>
		);
	}

	const filePath = path.join(projectsDirectory, `${slug}.mdx`);

	if (!fs.existsSync(filePath)) {
		return notFound();
	}

	const source = await fs.promises.readFile(filePath, 'utf8');

	const { content } = await compileMDX({
		source,
		options: {
			parseFrontmatter: false
		},
		components: {
			Image,
			Link
		},
	});

	return (
		<div className="container mx-auto p-8">
			<div className="mb-6 text-center">
				<AnimatedImage
					imageUrl={projectData.imageUrl}
					alt="My Love Memories Logo"
					width={200}
					height={200}
				/>
				<ProjectTitle title={projectData.title} />

				<ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto justify-center py-6">
					{projectData.tags.map((tag, index) => (
						<li
							className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:bg-white dark:text-black"
							key={index}
						>
							{tag}
						</li>
					))}
				</ul>
			</div>

			<div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
				{projectData.githubUrl && (
					<Link href={projectData.githubUrl} target="_blank" rel="noopener noreferrer">
						<div className="flex items-center justify-center px-4 py-2 bg-gray-900 text-white hover:bg-gray-700 cursor-pointer rounded-full text-center dark:bg-gray-700 dark:hover:bg-gray-600">
							<FaGithub className="mr-2" />
							View on GitHub
						</div>
					</Link>
				)}

				{projectData.projectUrl && (
					<Link href={projectData.projectUrl} target="_blank" rel="noopener noreferrer">
						<div className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white hover:bg-blue-500 cursor-pointer rounded-full text-center dark:bg-blue-500 dark:hover:bg-blue-400">
							<FiExternalLink className="mr-2" />
							Visit Website
						</div>
					</Link>
				)}
			</div>

			<div className="prose mx-auto max-w-4xl mt-6 dark:prose-invert">
				{content}
			</div>
		</div>
	);
}
