import React from 'react';
import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';
import { motion as m } from 'framer-motion';

const Footer = () => {
  return (
    <m.footer
      className={`footer footer-center p-10 bg-base-200 text-base-content rounded`}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
      viewport={{ once: true }}
    >
      <PageLinks />
      <SocialLinks />
      <div>
        <p className="font-mono text-xl">
          © 2022 - Portfolio | Made from scratch, with NextJS.
        </p>
      </div>
    </m.footer>
  );
};

export default Footer;
