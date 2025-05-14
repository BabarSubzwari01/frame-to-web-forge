
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import DatasetCard from '@/components/ui/dataset-card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Datasets = () => {
  const [selectedDataset, setSelectedDataset] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const datasets = [
    {
      title: 'MNIST Image Classification',
      description: '10,000 labeled images for machine learning training',
      size: '10GB',
      lastUpdated: 'Jan 15, 2025',
      tags: ['Computer Vision'],
      active: true,
      details: {
        samples: '10,000 images',
        classes: '10 classes (digits 0-9)',
        imageSize: '28x28 pixels',
        format: 'PNG',
        models: ['CNN', 'QCNN'],
        accuracy: {
          CNN: '92.2%',
          QCNN: '94.5%'
        }
      }
    },
    {
      title: 'NIH Chest X-ray',
      description: 'Chest X-ray images for pneumonia detection',
      size: '15GB',
      lastUpdated: 'Feb 10, 2025',
      tags: ['Medical Imaging'],
      active: false,
      details: {
        samples: '112,120 X-ray images',
        classes: '14 different diseases',
        imageSize: '1024x1024 pixels',
        format: 'DICOM',
        models: ['CNN'],
        accuracy: {
          CNN: '86.4%'
        }
      }
    },
    {
      title: 'Kaggle Heart Disease',
      description: 'Clinical data for heart disease prediction',
      size: '1.5GB',
      lastUpdated: 'Mar 20, 2025',
      tags: ['Clinical Data'],
      active: false,
      details: {
        samples: '303 patient records',
        features: '14 clinical features',
        models: ['CNN', 'QCNN'],
        accuracy: {
          CNN: '88.5%',
          QCNN: '91.2%'
        }
      }
    }
  ];

  const handleDatasetClick = (index: number) => {
    setSelectedDataset(index);
  };

  const handleCloseDialog = () => {
    setSelectedDataset(null);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredDatasets = datasets.filter(dataset =>
    dataset.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout title="Datasets">
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-80">
          <input 
            type="text"
            placeholder="Search datasets..." 
            className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            value={searchQuery}
            onChange={handleSearchChange}
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
        {filteredDatasets.map((dataset, index) => (
          <DatasetCard
            key={index}
            title={dataset.title}
            description={dataset.description}
            size={dataset.size}
            lastUpdated={dataset.lastUpdated}
            tags={dataset.tags}
            isActive={dataset.active}
            onClick={() => handleDatasetClick(index)}
          />
        ))}
      </div>

      {filteredDatasets.length === 0 && (
        <div className="flex flex-col items-center justify-center py-8">
          <p className="text-gray-500 text-lg">No datasets found matching "{searchQuery}"</p>
        </div>
      )}
      
      {selectedDataset !== null && (
        <Dialog open={selectedDataset !== null} onOpenChange={handleCloseDialog}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>{datasets[selectedDataset].title}</DialogTitle>
              <DialogDescription>
                {datasets[selectedDataset].description}
              </DialogDescription>
            </DialogHeader>
            
            <div className="mt-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-500">Size</p>
                  <p>{datasets[selectedDataset].size}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-500">Last Updated</p>
                  <p>{datasets[selectedDataset].lastUpdated}</p>
                </div>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-500">Tags</p>
                <div className="flex flex-wrap gap-2">
                  {datasets[selectedDataset].tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 rounded-md text-sm">{tag}</span>
                  ))}
                </div>
              </div>
              
              {datasets[selectedDataset].details.samples && (
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-500">Samples</p>
                  <p>{datasets[selectedDataset].details.samples}</p>
                </div>
              )}
              
              {datasets[selectedDataset].details.classes && (
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-500">Classes</p>
                  <p>{datasets[selectedDataset].details.classes}</p>
                </div>
              )}
              
              {datasets[selectedDataset].details.features && (
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-500">Features</p>
                  <p>{datasets[selectedDataset].details.features}</p>
                </div>
              )}
              
              {datasets[selectedDataset].details.imageSize && (
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-500">Image Size</p>
                  <p>{datasets[selectedDataset].details.imageSize}</p>
                </div>
              )}
              
              {datasets[selectedDataset].details.format && (
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-500">Format</p>
                  <p>{datasets[selectedDataset].details.format}</p>
                </div>
              )}
              
              {datasets[selectedDataset].details.models && (
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-500">Models Trained</p>
                  <div className="space-y-2">
                    {datasets[selectedDataset].details.models.map((model, idx) => (
                      <div key={idx} className="flex justify-between">
                        <span>{model}</span>
                        <span className="font-medium">
                          {datasets[selectedDataset].details.accuracy?.[model] || 'N/A'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </Layout>
  );
};

export default Datasets;
