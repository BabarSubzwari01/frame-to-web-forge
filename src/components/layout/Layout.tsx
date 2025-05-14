
import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
  title: string;
}

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <div className="testbed-layout">
      <Sidebar />
      <main className="testbed-main">
        <Navbar title={title} />
        <div className="p-6">
          {children}
        </div>
        <footer className="px-6 py-4 text-sm text-gray-500 border-t">
          © 2025 TestBed. All rights reserved.
        </footer>
      </main>
    </div>
  );
};

export default Layout;
