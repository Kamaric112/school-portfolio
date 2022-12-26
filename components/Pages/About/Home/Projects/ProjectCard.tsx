import GithubIc from '@components/Icon/GithubIc';
import WebsiteIc from '@components/Icon/WebsiteIc';
import React from 'react';
import { motion as m } from 'framer-motion';
interface Project {
  name: string;
  description: string;
  image: string;
  url: string;
}
interface ProjectCardProps {
  project: Project;
  index: number;
}
const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <m.div
      className="space-y-20  mt-12"
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
      viewport={{ once: true }}
    >
      <div className="opacity-test">
        <div className="flex items-center justify-between">
          <div
            className={`lg:bg-gradient-to-r from-gray-900 to-gray-600 bg-gradient-to-r w-full md:w-1/2 relative flex justify-start py-7 md:py-12`}
          >
            <div className="lg:relative left-40 shadow-2xl">
              <img
                className="object-cover shadow-xl max-w-full h-auto"
                src={project.image}
                alt={project.name}
              />
            </div>
          </div>
          <h1 className="hidden lg:block text-8xl xl:text-9xl ">{index + 1}</h1>
        </div>
        <div className="mt-4 md:mt-2 flex flex-col md:flex-row md:items-center md:justify-between">
          <p className="md:space-x-4 flex-1">
            <span className="text-xl md:text-2xl xl:text-4xl text-gray-200 f block md:inline">
              {project.name}
            </span>
            <span className="text-gray-500 text-sm md:text-base xl:text-desc">
              {project.description}
            </span>
          </p>
          <div className="flex items-center justify-end space-x-5 mt-3 md:mt-0">
            <a href={project.url} target="_blank" rel="no-referrer">
              <WebsiteIc />
            </a>
            <a
              href="http://github.com/drkPrince/agilix"
              target="_blank"
              rel="no-referrer"
            >
              <GithubIc />
            </a>
          </div>
        </div>
      </div>
    </m.div>
  );
};

export default ProjectCard;
