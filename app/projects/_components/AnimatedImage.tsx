"use client"
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

type AnimatedImageProps = {
	imageUrl: StaticImageData;
	alt: string;
	width?: number;
	height?: number;
};

const AnimatedImage: React.FC<AnimatedImageProps> = ({ imageUrl, alt, width = 400, height = 400 }) => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8 }}   // Starting with a smaller scale and opacity
			animate={{ opacity: 1, scale: 1 }}     // Growing to full size with full opacity
			transition={{
				duration: 0.7,                       // Animation duration
				ease: 'easeInOut',                   // Smooth easing for better effect
			}}
		>
			<Image
				src={imageUrl}
				alt={alt}
				width={width}
				height={height}
				className="rounded-3xl object-contain mx-auto"
			/>
		</motion.div>
	);
};

export default AnimatedImage;
