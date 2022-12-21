import React from 'react';
import { HeaderLinks } from '../Header/HeaderLinks';
import Link from 'next/link';
const PageLinks = () => {
  return (
    <div className="container mx-auto text-center text-white flex flex-col gap-3">
      <p className="text-2xl">Links</p>
      <ul className="flex justify-center gap-4 md:ml-12 flex-wrap">
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
      </ul>
    </div>
  );
};

export default PageLinks;
