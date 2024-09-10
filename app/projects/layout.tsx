// app/project/layout.tsx

import Footer from '@/components/footer';
import { ReactNode } from 'react';
import GoBack from './_components/GoBack';

type ProjectLayoutProps = {
	children: ReactNode;
};

export default function ProjectLayout({ children }: ProjectLayoutProps) {
	return (
		<div className="min-h-screen flex flex-col">
			<GoBack />
			{/* Main Content */}
			<main className="flex-grow p-6">
				{children} {/* This will render the specific project page content */}
			</main>
			<Footer />
		</div>
	);
}
