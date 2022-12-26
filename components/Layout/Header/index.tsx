import React, { SetStateAction, useState } from 'react';
import Link from 'next/link';
import tw, { styled } from 'twin.macro';
import { useRouter } from 'next/router';
import { IHeaderLink } from './HeaderLinks';
import MenuIc from '@components/Icon/MenuIc';
import CloseIc from '@components/Icon/CloseIc';
export interface HeaderProps {
  links: IHeaderLink[];
}

const Header = ({ links }: HeaderProps) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-12 md:h-28 flex justify-center items-center">
      {/* mobile nav */}
      <MobileHeaderWrapper open={open}>
        <button
          className="block lg:hidden self-end -mx-4 -mb-6 -my-2"
          onClick={() => setOpen(!open)}
        >
          <CloseIc />
        </button>
        <StyledLink href="/" $isActive={router.pathname === '/' ? true : false}>
          Home
        </StyledLink>
        {links.map((link) => (
          <StyledLink
            href={link.url}
            key={link.activeKey}
            $isActive={router.pathname.includes(link.activeKey)}
          >
            {link.title}
          </StyledLink>
        ))}
      </MobileHeaderWrapper>

      <HeaderWrapper>
        <StyledLink href="/" $isActive={router.pathname === '/' ? true : false}>
          Home
        </StyledLink>
        {links.map((link) => (
          <StyledLink
            href={link.url}
            key={link.activeKey}
            $isActive={router.pathname.includes(link.activeKey)}
          >
            {link.title}
          </StyledLink>
        ))}
      </HeaderWrapper>

      <button
        className="block lg:hidden self-end absolute right-2 "
        onClick={() => setOpen(!open)}
      >
        <MenuIc />
      </button>
    </header>
  );
};

export default Header;

const StyledLink = styled(Link)(({ $isActive }: { $isActive: boolean }) => [
  tw`text-xl `,
  $isActive
    ? tw` border-b-2 border-b-red-700 `
    : tw`hover:text-2xl transform duration-200`,
]);

const HeaderWrapper = tw.div`hidden lg:flex justify-center items-center gap-4 font-mono `;

const MobileHeaderWrapper = styled('div')(({ open }: { open: boolean }) => [
  tw`absolute right-0 top-0 justify-center items-center gap-4 font-mono  bg-[#1E1E1E] w-auto h-auto md:hidden rounded-md p-6 transform duration-200 self-end z-30`,
  open ? tw` -translate-y-0 flex flex-col ` : tw`-translate-y-full -top-80`,
]);
