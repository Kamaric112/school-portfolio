import React from 'react';
import { motion as m } from 'framer-motion';
import Link from 'next/link';
const IntroduceSection = () => {
  return (
    <m.section
      className="max-w-[1100px] xl:max-w-[1500px] pl-8 mt-12  text-base md:text-xl xl:text-2xl text-gray-400"
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
      viewport={{ once: true }}
    >
      <h3 className="font-extrabold font-montserrat">
        A little bit about myself...
      </h3>
      <p className="leading-10 mt-4 md:mt-6">
        I specialise in frontend development. I'm also a sucker for clean,
        functional designs that prioritise user experience. Some of the tools I
        like working with are —
      </p>
      <span className="block text-gray-300 leading-looser">
        React, Next, Node, TypeScript, and will continue to expand!
      </span>
      <Link
        href="/about"
        className="btn  bg-[#78716c] hover:bg-transparent text-xl"
      >
        MORE...{' '}
      </Link>{' '}
    </m.section>
  );
};

export default IntroduceSection;
