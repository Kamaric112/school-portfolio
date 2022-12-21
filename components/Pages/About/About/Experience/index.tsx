import React, { useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import tw, { styled } from 'twin.macro';
import { BreakLine } from '@components/styles';
import JobIc from '@components/Icon/JobIc';
import { TextStyled } from '../Introduction';
import { v4 as uuidv4 } from 'uuid';
const Experience = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <m.div className="w-auto ">
      <AnimatePresence>
        <m.div
          key={1}
          className="rounded-tr-md relative z-20  rounded-br-md shadow-sm px-3 py-3 text-lg bg-gray-700 cursor-pointer font-open border-l-2 border-yellow-500"
          onClick={() => setIsOpen(!isOpen)}
          style={{ originX: 0 }}
        >
          <m.div className=" flex flex-row gap-2 font-bold ml-1 font-montserrat text-bold whitespace-nowrap">
            <JobIc />
            Work Experience
          </m.div>
        </m.div>

        {isOpen && (
          <>
            <m.div
              key={30}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              }}
              exit={{ opacity: 0 }}
              className="flex flex-col p-2 text-lg border border-gray-300"
            >
              {workExperience.map((work) => (
                <TextStyled
                  className="job-1 flex flex-col gap-3 px-4"
                  key={uuidv4().toString()}
                >
                  <TextStyled css={[tw`font-bold text-2xl leading-10`]}>
                    {work.name}
                  </TextStyled>
                  <TextStyled>Company:{work.company} </TextStyled>
                  {work.project && (
                    <TextStyled>Project:{work.project} </TextStyled>
                  )}
                  {work.size && <TextStyled>Team Size:{work.size}</TextStyled>}
                  <TextStyled>Duration:{work.duration} </TextStyled>
                  <TextStyled>Description: {work.description}</TextStyled>
                  {work.stacks && <TextStyled>{work.stacks}</TextStyled>}
                  <BreakLine />
                </TextStyled>
              ))}
            </m.div>
          </>
        )}
      </AnimatePresence>
    </m.div>
  );
};

export default Experience;

interface IWorkExperience {
  name: string;
  company: string;
  project?: string;
  size?: number;
  duration: string;
  description: string;
  stacks?: string;
}
const workExperience: IWorkExperience[] = [
  {
    name: 'Front-End Developer - Full-time Internship',
    company: 'HDWEBSOFT Software Development Company',
    project: ' Social Media Talent Website',
    size: 4,
    duration: ' Oct/2022 - Dec/2022 ',
    description: ` Description: As a Front-End Developer intern at HDWEBSOFT, I
  was responsible for contributing to the development of the
  Social Media Talent Website. My main tasks included creating
  user interface elements for various pages,building reusable components, developing APIs to
  enable data modification, and retrieving data to be displayed
  on the front-end.`,
    stacks: `Tech Stacks: Jira,NextJS (ServerSide-Rendering),
  TypeScript, React Query, and MySQL database`,
  },
  {
    name: 'Structural Engineer - Full-time Employee',
    company: 'Simpson Strong-Tie Vietnam',
    duration: ' Duration: Feb/2022 - Oct/2022 ',
    description: `As a Structural Engineer at Simpson Strong-Tie
    Vietnam, I was responsible for designing structural components
    and performing engineering analysis for various projects. I
    also had the opportunity to collaborate with customers in the
    United States to optimize solutions for their needs`,
  },
];
