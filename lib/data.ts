import classConverter from "@/public/classConverter.png";
import crmExample from "@/public/crmExample.png";
import meamenuSite from "@/public/meamenuSite.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Diploma in Information Technology",
    location: "Tuscany",
    description:
      "I completed my schooling while relocating to three different cities, demonstrating my adaptability and resilience 💅",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Front-End Developer",
    location: "Tuscany",
    description:
      "I worked as a front-end developer for 3 years, developing a good set of skills. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Tuscany",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Sequelize and MongoDB. I'm open to new opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "MeaMenu",
    description:
      "The system tailors the menu based on individual tastes, enhancing user satisfaction and engagement.",
    tags: ["React", "React Native", "Next.js", "Tailwind", "MongoDB", "NestJS"],
    imageUrl: meamenuSite,
  },
  {
    title: "CRMs",
    description:
      "During my career, I've developed multiple CRM systems tailored specifically for customers.",
    tags: ["React", "Angular", "Vue", "TypeScript"],
    imageUrl: crmExample,
  },
  {
    title: "classConverter",
    description:
      "A public extension for VScode that allow users to convert class from backend to frontend easly",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: classConverter,
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "Vue",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Zustand",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
