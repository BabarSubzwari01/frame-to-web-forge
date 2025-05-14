
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dashboard, Database, Settings, Model } from 'lucide-react';
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Dashboard', path: '/', icon: Dashboard },
    { name: 'Models', path: '/models', icon: Model },
    { name: 'Datasets', path: '/datasets', icon: Database },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <div className="testbed-sidebar">
      <div className="p-4 pb-2 mb-4">
        <h2 className="text-xl font-bold">TestBed</h2>
      </div>
      
      <nav className="flex flex-col">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={cn(
              "flex items-center gap-2 px-4 py-2 mx-2 rounded-md transition-colors",
              location.pathname === item.path 
                ? "bg-white bg-opacity-10" 
                : "hover:bg-white hover:bg-opacity-5"
            )}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
