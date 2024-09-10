// app/project/layout.tsx

import Footer from '@/components/footer';
import Header from '@/components/header';
import ActiveSectionContextProvider from '@/context/active-section-context';
import { ReactNode } from 'react';

type HomeLayoutProps = {
	children: ReactNode;
};

export default function HomeLayout({ children }: HomeLayoutProps) {
	return (
		<div className="min-h-screen flex flex-col">
			<main className="flex-grow p-6">
				<ActiveSectionContextProvider>
					<Header />
					{children}
					<Footer />
				</ActiveSectionContextProvider>
			</main>
		</div>
	);
}
