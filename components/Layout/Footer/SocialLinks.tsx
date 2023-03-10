import React from 'react';
import GithubIc from '@components/Icon/GithubIc';
import LinkedinIc from '@components/Icon/LinkedinIc';
import FBIc from '@components/Icon/FBIc';
import Link from 'next/link';

const SocialLinks = () => {
  return (
    <div className="grid grid-flow-col gap-4">
      {socials.map((social) => (
        <Link
          href={social.url}
          key={social.url}
          className="text-gray-400 hover:text-white mx-3"
        >
          {social.svg}
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;

interface ISocialLink {
  url: string;
  svg: JSX.Element;
}

const socials: ISocialLink[] = [
  {
    url: 'https://github.com/Kamaric112',
    svg: <GithubIc />,
  },
  {
    url: 'https://www.linkedin.com/in/nguyenquangtruong/',
    svg: <LinkedinIc />,
  },
  {
    url: 'https://www.facebook.com/profile.php?id=100004417867923',
    svg: <FBIc />,
  },
];
