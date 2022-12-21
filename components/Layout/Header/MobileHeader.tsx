import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { HeaderProps } from '.';
import MenuIc from '@components/Icon/MenuIc';

//TODO: fix props
const MobileHeader = ({ open, setOpen, links }: any) => {
  const closeNav = () => {
    setTimeout(() => {
      setOpen(!open);
    }, 100);
  };
  return (
    <div
      className={` transform w-screen h-screen z-10 ${
        open ? '-translate-x-0 ' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex flex-col ml-4">
        <Link href="/">Home</Link>
        {links.map((link) => (
          <Link href={link.url} key={link.activeKey} onClick={() => closeNav()}>
            {link.title}
          </Link>
        ))}
      </div>
      <div onClick={() => setOpen(!open)}>
        <MenuIc />
      </div>
    </div>
    // <div className="flex flex-col justify-center items-center gap-4 font-mono">
    //   <Link href="/">Home</Link>

    //   {links.map((link) => (
    //     <Link href={link.url} key={link.activeKey}>
    //       {link.title}
    //     </Link>
    //   ))}
    // </div>
  );
};

export default MobileHeader;
