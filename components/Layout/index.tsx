import React from 'react';
import Header from './Header/';
import Footer from './Footer/';
import { HeaderLinks } from './Header/HeaderLinks';

export interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#262626] text-white font-mono">
      <Header links={HeaderLinks} />
      <main className=" flex flex-col max-w-[1200px] w-11/12  mx-auto my-12  min-h-screen gap-12">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
