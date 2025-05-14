
import React from 'react';

interface ModelCardProps {
  title: string;
  version: string;
  accuracy: string;
  requests: string;
  lastUpdated: string;
  isActive?: boolean;
}

const ModelCard = ({ 
  title, 
  version, 
  accuracy, 
  requests, 
  lastUpdated, 
  isActive = true 
}: ModelCardProps) => {
  return (
    <div className="p-6 border rounded-md bg-white">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-medium">{title}</h3>
            <span className="text-sm text-gray-500">{version}</span>
          </div>
          <div className="flex items-center mt-1">
            <span className={`px-2 py-0.5 rounded-full text-xs ${isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
              {isActive ? 'Active' : 'Inactive'}
            </span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-500 mb-1">Accuracy</p>
          <p className="font-medium">{accuracy}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Requests</p>
          <p className="font-medium">{requests}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Last Updated</p>
          <p className="font-medium">{lastUpdated}</p>
        </div>
      </div>
      
      <button className="w-full py-2 px-4 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
        View Details
      </button>
    </div>
  );
};

export default ModelCard;
