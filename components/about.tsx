"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After finishing school, I decided to pursue my passion for coding and programming. I have been self-taught and   <span className="italic">continue to be passionate about learning new things.</span> I <span className="underline">love</span> innovation and cutting-edge solutions that enhance the quality of life for developers. Currently, I am focusing on learning  <span className="font-medium">AI technologies</span> and expanding my knowledge in this exciting field.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy working out and exploring new ideas in self-improvement. I'm also passionate about creating and participating in startups, as I thrive on innovation and <span className="font-medium">bringing new ideas to life.</span>
      </p>

    </motion.section >
  );
}
