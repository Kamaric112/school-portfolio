import React from 'react';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import tw, { css } from 'twin.macro';

interface Link {
  url: string;
  title: string;
  activeKey: string;
}
export interface HeaderProps {
  links: Array<Link>;
}
console.log('test');

const Header = ({ links }: HeaderProps) => {
  return (
    <div className="flex justify-center items-center gap-4 font-mono">
      {links.map((link) => (
        <Link href={link.url} key={link.activeKey}>
          <div>{link.title} </div>
        </Link>
      ))}
    </div>
  );
};

export default Header;

// const StyledLink = styled(Link)(({ $isActive }: { $isActive: boolean }) => [
//   tw` flex flex-wrap lg:items-center font-semibold leading-none py-5 px-4 xl:px-5 text-left rounded-lg lg:rounded-b-none border border-b-0 hover:bg-yellow bg-orange gap-3 xl:text-xl text-brown lg:text-center  `,
//   $isActive
//     ? tw` bg-yellow order-last lg:order-none xl:pt-2 lg:pt-3 z-1 border-t-8 border-t-lime-1 rounded-b-none border-x border-x-orange-1 relative top-[1px] all:rotate-0`
//     : tw` border-orange-1 xl:text-center xl:self-center xl:py-5 lg:py-6 border-b lg:border-b-0`,
// ]);

// const StyledLink = ({ isActive }) => (
//   <Link
//     css={[
//       tw`flex flex-wrap lg:items-center font-semibold leading-none py-5 px-4 xl:px-5 text-left rounded-lg lg:rounded-b-none border border-b-0 hover:bg-yellow bg-orange gap-3 xl:text-xl text-brown lg:text-center `,
//       isActive
//         ? tw`bg-yellow order-last lg:order-none xl:pt-2 lg:pt-3 z-1 border-t-8 border-t-lime-1 rounded-b-none border-x border-x-orange-1 relative top-[1px] all:rotate-0`
//         : tw`border-orange-1 xl:text-center xl:self-center xl:py-5 lg:py-6 border-b lg:border-b-0`,
//     ]}
//   ></Link>
// );
