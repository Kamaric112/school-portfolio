import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="hero h-[600px] w-full bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-xl space-y-4">
          <h1 className="text-5xl">Nguyen Quang Truong</h1>
          <h1 className="text-3xl font-light">Software Developer</h1>
          <p className="py-6">
            Passionate about crafting digital experiences that delight, empower.
            My core values are authenticity, minimalism and independent
            thinking. I love everything at the intersection of tech, design and
            philosophy.
          </p>
          <Link
            href="https://drive.google.com/file/d/1uDFiad25bGvn3rrYIfQFKkqI8hznA1m-/view?usp=sharing"
            className="btn bg-transparent hover:bg-[#78716c] text-xl my-4 md:mr-8"
          >
            Check out my resumé
          </Link>
          <Link
            href="/projects"
            className="btn  bg-[#78716c] hover:bg-transparent text-xl"
          >
            see my work
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
