import React from 'react';
import HeroSection from './HeroSection';
import IntroduceSection from './IntroduceSection';
import ProjectSection from './Projects/ProjectSection';

const HomeSection = () => {
  return (
    <div className="space-y-32 md:space-y-48 xl:space-y-48">
      <HeroSection />
      <IntroduceSection />
      <ProjectSection />
    </div>
  );
};

export default HomeSection;
