import React from 'react';
import Header from './Header/';
import Footer from './Footer';
import { HeaderLinks } from './Header/HeaderLinks';
export interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#262626] text-white font-mono">
      <Header links={HeaderLinks} />
      <div className=" w-full flex-1 flex flex-col ">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
