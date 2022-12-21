import React from 'react';
import ExperienceSection from './Experience';
import Introduction from './Introduction';
import Qualifications from './Qualifications';
import Skills from './Skills';

const AboutSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <Introduction />
        <Qualifications />
        <ExperienceSection />
      </div>
      <Skills />
    </div>
  );
};

export default AboutSection;
