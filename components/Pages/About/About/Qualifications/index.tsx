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
                <div className="flex flex-col px-4">
                  <div>
                    <p>2017 - 2021 </p>
                    <h2>
                      Ho Chi Minh City University of Technology (Bach Khoa
                      University)
                    </h2>
                    <div>Civil Engineering</div>
                    <ul>
                      <li></li>
                    </ul>
                  </div>
                  <BreakLine />
                  <div>
                    <p>2022 </p>
                    <h2>
                      The International English Language Testing System (IELTS)
                    </h2>
                    <div>IDP Vietnam</div>
                    <div>7.5 overall </div>
                  </div>
                  <BreakLine />

                  <div>
                    <p>Aug/2022 - Oct/2022 </p>
                    <h2>CoderSchool</h2>
                    <div>Full Stack Web Development</div>
                    <div>Front end Course Finished</div>
                  </div>
                  <div>
                    <p>2022 </p>
                    <h2>The Odin Project</h2>
                    <div>Full Stack Web Development Online Course</div>
                    <div>Learned the basics of HTML, CSS and JavaScript</div>
                  </div>
                </div>
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
