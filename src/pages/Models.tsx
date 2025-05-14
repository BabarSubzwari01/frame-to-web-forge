
import React from 'react';
import Layout from '@/components/layout/Layout';
import ModelCard from '@/components/ui/model-card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const Models = () => {
  const models = [
    {
      title: 'Image Classification',
      version: 'v2.0.1',
      accuracy: '98.5%',
      requests: '1.2M',
      lastUpdated: '2h ago',
      isActive: true
    },
    {
      title: 'Text Generation',
      version: 'v1.5.0',
      accuracy: '96.2%',
      requests: '800K',
      lastUpdated: '1d ago',
      isActive: true
    },
    {
      title: 'Object Detection',
      version: 'v1.2.3',
      accuracy: '94.8%',
      requests: '500K',
      lastUpdated: '3d ago',
      isActive: true
    }
  ];

  return (
    <Layout title="Models">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-gray-600">Manage and monitor your AI models</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          New Model
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {models.map((model, index) => (
          <ModelCard
            key={index}
            title={model.title}
            version={model.version}
            accuracy={model.accuracy}
            requests={model.requests}
            lastUpdated={model.lastUpdated}
            isActive={model.isActive}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Models;
