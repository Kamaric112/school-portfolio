import React from 'react';
import {
  HTMLIc,
  CSSIc,
  JavaScriptIc,
  TypeScriptIc,
  TailWindIc,
  MuiIc,
  ReactIc,
  ReduxIc,
  NextIc,
  JiraIc,
  GithubIc,
} from '@components/Icon/Languages';

import { motion as m } from 'framer-motion';
//TODO fix size and animation
const Skills = () => {
  return (
    <ul className="w-auto grid grid-cols-3 md:flex    flex-row flex-wrap gap-8">
      {skills.map((skill) => (
        <li className="w-24 h-24 md:w-32 md:h-32 flex flex-col justify-center items-center gap-2 p-4 border rounded-xl">
          <div className="w-8 md:w-12">{skill.svg}</div>
          <div className=" text-center whitespace-normal text-sm md:text-base">
            {' '}
            {skill.name}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Skills;

const skills = [
  {
    name: 'HTML',
    svg: <HTMLIc />,
  },
  {
    name: 'CSS',
    svg: <CSSIc />,
  },
  {
    name: 'JavaScript',
    svg: <JavaScriptIc />,
  },
  {
    name: 'TypeScript',
    svg: <TypeScriptIc />,
  },
  {
    name: 'ReactJS',
    svg: <ReactIc />,
  },
  {
    name: 'NextJs',
    svg: <NextIc />,
  },
  {
    name: 'Redux',
    svg: <ReduxIc />,
  },
  {
    name: 'TailWindCSS',
    svg: <TailWindIc />,
  },
  {
    name: 'Material Ui',
    svg: <MuiIc />,
  },
  {
    name: 'Github',
    svg: <GithubIc />,
  },
  {
    name: 'Jira',
    svg: <JiraIc />,
  },
];
