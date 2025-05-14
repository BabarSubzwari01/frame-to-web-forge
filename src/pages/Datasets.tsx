
import React from 'react';
import Layout from '@/components/layout/Layout';
import DatasetCard from '@/components/ui/dataset-card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const Datasets = () => {
  const datasets = [
    {
      title: 'Image Classification Dataset',
      description: '10,000 labeled images for machine learning training',
      size: '10GB',
      lastUpdated: 'Jan 15, 2025',
      tags: ['Computer Vision']
    },
    {
      title: 'Natural Language Dataset',
      description: '1M sentences for NLP tasks',
      size: '5GB',
      lastUpdated: 'Feb 20, 2025',
      tags: ['NLP']
    },
    {
      title: 'Time Series Dataset',
      description: 'Historical stock market data for prediction',
      size: '2GB',
      lastUpdated: 'Mar 5, 2025',
      tags: ['Time Series']
    }
  ];

  return (
    <Layout title="Datasets">
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-80">
          <input 
            type="text"
            placeholder="Search datasets..." 
            className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
        </div>
        
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          New Dataset
        </Button>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        {datasets.map((dataset, index) => (
          <DatasetCard
            key={index}
            title={dataset.title}
            description={dataset.description}
            size={dataset.size}
            lastUpdated={dataset.lastUpdated}
            tags={dataset.tags}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Datasets;
