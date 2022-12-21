import React, { useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import tw, { styled } from 'twin.macro';
import { BreakLine } from '@components/styles';
import EducationIc from '@components/Icon/EducationIc';
import { TextStyled } from '../Introduction';

const Qualifications = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* // educations section */}
      <m.div>
        <AnimatePresence>
          <m.div
            key={1}
            className="rounded-tr-md relative z-20  rounded-br-md shadow-sm px-3 py-3 text-lg bg-gray-700 cursor-pointer font-open border-l-2 border-yellow-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            <m.div className=" flex flex-row gap-2 font-bold ml-1 font-montserrat text-bold whitespace-nowrap">
              <EducationIc />
              Educations
            </m.div>
          </m.div>

          {isOpen && (
            <>
              <m.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                  },
                }}
                exit={{ opacity: 0 }}
                className="p-2 text-lg  border border-gray-300"
              >
                <TextStyled>
                  Front-End Developer - Full-time Internship:
                </TextStyled>
                <TextStyled>
                  Company: HDWEBSOFT Software Development Company{' '}
                </TextStyled>
                <TextStyled>Project: Social Media Talent Website </TextStyled>
                <TextStyled>Team Size: 4 </TextStyled>
                <TextStyled>Duration: Oct/2022 - Dec/2022 </TextStyled>
                <TextStyled>
                  Description: As a Front-End Developer intern at HDWEBSOFT, I
                  was responsible for contributing to the development of the
                  Social Media Talent Website. My main tasks included creating
                  user interface elements for various pages, developing APIs to
                  enable data modification, and retrieving data to be displayed
                  on the front-end.
                </TextStyled>
                <TextStyled>
                  Technology used:Jira,NextJS (ServerSide-Rendering),
                  TypeScript, React Query, and MySQL database
                </TextStyled>

                <BreakLine />
                <TextStyled>
                  During my time as a structural engineer, I gained valuable
                  experience in project management and engineering analysis,
                  skills that I believe will translate well to the field of
                  front-end development. I am excited to use my analytical and
                  problem-solving abilities to design and develop intuitive and
                  user-friendly web applications.
                </TextStyled>
              </m.div>
            </>
          )}
        </AnimatePresence>
      </m.div>

      {/* work experience section */}
    </>
  );
};

export default Qualifications;
