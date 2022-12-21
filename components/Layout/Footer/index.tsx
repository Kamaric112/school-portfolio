import React from 'react';
import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';
import { motion as m } from 'framer-motion';

const Footer = () => {
  return (
    <m.div
      className={`bg-[#1e1e1e]  p-4 flex flex-col md:flex-row justify-between gap-12 h-auto md:h-28 `}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
      viewport={{ once: true }}
    >
      <PageLinks />
      <SocialLinks />
    </m.div>
  );
};

export default Footer;
