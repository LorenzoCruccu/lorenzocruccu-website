import classConverter from "@/public/classConverter.png";
import crmExample from "@/public/crmExample.png";
import myLoveMemories from "@/public/images/my-love-memories/myLoveMemories.png";
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
      "I completed my schooling while relocating to three different cities, proving myself my adaptability and resilience",
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
      "I'm now a full-stack developer working as a freelancer. My main stack includes React, Next.js, TypeScript, Tailwind and NodeJS. I'm open to new opportunities!",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "My Love Memories",
    slug: "my-love-memories",
    description:
      "Web-based application that allows users to discover and share new places, powered by a dynamic user-friendly interface.",
    tags: ["React", "Next.js", "TRPC", "Google Maps", "Postgres", "Prisma"],
    date: "2024-09-06",
    imageUrl: myLoveMemories,
    githubUrl: "https://github.com/LorenzoCruccu/hide-and-hit",
    projectUrl: "https://mylovememories.vercel.app/",
    isDraft: false,
  },
  {
    title: "Mea Menu Blog",
    slug: "mea-menu-blog",
    description:
      "A dynamic, high-performance, and fully responsive blog with elegant animations.",
    tags: ["React", "React Native", "Next.js", "Tailwind", "Framer Motion"],
    imageUrl: meamenuSite,
    isDraft: true,
  },
  {
    title: "CRMs",
    slug: "crms",
    description:
      "During my career, I've developed multiple CRM systems tailored specifically for customers.",
    tags: ["React", "Angular", "Vue", "TypeScript"],
    imageUrl: crmExample,
    isDraft: true,
  },
  {
    title: "classConverter",
    slug: "class-converter",
    description:
      "A public extension for VScode that allow users to convert class from backend to frontend easly",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: classConverter,
    isDraft: true,
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
  "Zustand",
  "Express",
  "TRPC",
  "Framer Motion",
] as const;
