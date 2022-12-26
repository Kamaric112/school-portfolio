import React, { useEffect, useRef } from 'react';
// types
import type { NextPage } from 'next';
import Head from 'next/head';
import { motion as m } from 'framer-motion';
import HomeSection from '@components/Pages/About/Home';
const HomePage: NextPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>My Homepage</title>
      </Head>
      <h1 className="text-3xl font-bold underline flex flex-col gap-10 "> </h1>
      <HomeSection />
    </>
  );
};

export default HomePage;
