
import React from 'react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  className?: string;
}

const StatCard = ({ title, value, icon, className }: StatCardProps) => {
  return (
    <div className={cn("p-6 rounded-md bg-white shadow-sm", className)}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-700">{title}</h3>
        {icon && <div>{icon}</div>}
      </div>
      <p className="mt-2 text-3xl font-semibold">{value}</p>
    </div>
  );
};

export default StatCard;
