import React from 'react';
import Head from 'next/head';
import AboutSection from '@components/Pages/About/About';
import TitleSection from '@components/Pages/About/Title';

const about = () => {
  return (
    <>
      <Head>
        <title>About me</title>
      </Head>
      <>
        <TitleSection />
        <AboutSection />
      </>
    </>
  );
};

export default about;
