import React from 'react';
import { HeaderLinks } from '../Header/HeaderLinks';
import Link from 'next/link';
const PageLinks = () => {
  return (
    <div className="grid grid-flow-col gap-4">
      <Link href="/" className="text-gray-400 hover:text-white  text-2xl">
        Home
      </Link>
      {HeaderLinks.map((link) => (
        <Link
          href={link.url}
          className="text-gray-400 hover:text-white text-2xl"
          key={link.activeKey}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default PageLinks;
