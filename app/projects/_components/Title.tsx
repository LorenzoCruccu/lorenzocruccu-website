"use client"
import { motion } from 'framer-motion';

type ProjectTitleProps = {
	title: string;
};

const ProjectTitle: React.FC<ProjectTitleProps> = ({ title }) => {
	return (
		<motion.h1
			className="text-4xl font-bold text-gray-800 dark:text-white mt-6"
			initial={{ opacity: 0, y: -50 }}   // Starting position (invisible and higher up)
			animate={{ opacity: 1, y: 0 }}      // Ending position (visible and in the correct spot)
			transition={{
				duration: 0.6,                    // Animation duration
				ease: 'easeInOut',                // Easing function for smoothness
			}}
		>
			{title}
		</motion.h1>
	);
};

export default ProjectTitle;
