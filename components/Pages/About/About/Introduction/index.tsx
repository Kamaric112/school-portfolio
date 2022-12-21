import React, { useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import tw, { styled } from 'twin.macro';
import { BreakLine } from '@components/styles';
import UserIc from '@components/Icon/UserIc';

//TODO : generalize the css of components
const Introduction = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <m.div>
      <AnimatePresence>
        <m.div
          key={1}
          className="rounded-tr-md relative z-20  rounded-br-md shadow-sm px-3 py-3 text-lg bg-gray-700 cursor-pointer font-open border-l-2 border-yellow-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <m.div className="flex flex-row gap-2 font-bold ml-1 font-montserrat text-bold whitespace-nowrap">
            <UserIc />
            About Myself
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
                Hello and welcome to my personal website! My name is Nguyen
                Quang Truong and I am a front-end developer with a background in
                civil engineering. I have always had a passion for technology
                and problem-solving, which is what led me to make the switch
                from my previous career in civil engineering to computer
                science.
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
              <BreakLine />

              <TextStyled>
                In addition to my work experience, I have completed an
                internship as a front-end developer, where I had the opportunity
                to work on various projects and hone my skills in HTML, CSS, and
                JavaScript. I am constantly learning and seeking out new
                challenges and opportunities to grow as a developer.
              </TextStyled>
              <BreakLine />

              <TextStyled>
                Thank you for visiting my website. I hope you find it
                informative and that it gives you a better understanding of my
                background and capabilities as a front-end developer. If you
                have any questions or would like to discuss potential
                opportunities, please don't hesitate to reach out to me.
              </TextStyled>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </m.div>
  );
};

export default Introduction;

export const TextStyled = styled(m.div)(tw`text-lg font-mono  `);
