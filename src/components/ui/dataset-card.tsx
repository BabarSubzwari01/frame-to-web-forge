
import React from 'react';
import { MoreHorizontal, File } from 'lucide-react';

interface DatasetCardProps {
  title: string;
  description: string;
  size?: string;
  lastUpdated?: string;
  tags?: string[];
}

const DatasetCard = ({ 
  title, 
  description, 
  size, 
  lastUpdated, 
  tags 
}: DatasetCardProps) => {
  return (
    <div className="p-6 border rounded-md hover:shadow-md transition-shadow bg-white">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-medium">{title}</h3>
        <button className="p-1 rounded-full hover:bg-gray-100">
          <MoreHorizontal className="w-5 h-5 text-gray-500" />
        </button>
      </div>
      
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-3">
        {size && (
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <File className="w-4 h-4" />
            {size}
          </div>
        )}
        
        {lastUpdated && (
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <span>Updated {lastUpdated}</span>
          </div>
        )}
      </div>
      
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-gray-100 rounded-md text-xs text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      
      <div className="mt-4 pt-4 border-t">
        <button className="w-full py-2 px-4 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
};

export default DatasetCard;
