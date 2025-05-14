
import React from 'react';
import { Bell, Search, User } from 'lucide-react';

interface NavbarProps {
  title: string;
}

const Navbar = ({ title }: NavbarProps) => {
  return (
    <div className="h-16 border-b flex items-center justify-between px-6">
      <h1 className="text-xl font-medium">{title}</h1>
      
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-8 pr-4 py-1.5 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        
        <button className="p-1.5 rounded-full hover:bg-gray-100">
          <Bell className="w-5 h-5 text-gray-600" />
        </button>
        
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
          <User className="w-5 h-5 text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
