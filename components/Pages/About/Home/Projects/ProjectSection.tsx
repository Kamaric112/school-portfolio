import React from 'react';
import ProjectCard from './ProjectCard';
const ProjectSection = () => {
  return (
    <section className="pl-7 pt-6 space-y-8 lg:space-y-20 text-base md:text-xl xl:text-2xl">
      <h2 className="font-extrabold font-montserrat ">PROOF OF WORK</h2>
      {projects.map((project, index) => (
        <ProjectCard project={project} index={index} key={project.name} />
      ))}
      <h2>And Many More ...</h2>
    </section>
  );
};

export default ProjectSection;

const projects = [
  {
    name: 'Portfolio',
    url: 'https://school-portfolio-hrfh.vercel.app/',
    image: 'https://placehold.co/500x300',
    description:
      'My Personal Portfolio website. Made with Next, TypeScript, Redux and Tailwind.',
  },
  {
    name: 'Moviee',
    url: 'https://movie-site-truong.netlify.app/',
    image: 'https://placehold.co/500x300',
    description:
      'A simple movie app that allows users to view and search for movies. Made with React, TypeScript, Redux and Tailwind.',
  },
  {
    name: 'CoderComm',
    url: 'https://coder-comm-truong.netlify.app',
    image: 'https://placehold.co/500x300',
    description:
      'A social media app that allows users to create and update posts, view other profiles. Made with React, TypeScript, Redux and Material UI.',
  },
];
