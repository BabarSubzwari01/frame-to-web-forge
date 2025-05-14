
import React from 'react';
import Layout from '@/components/layout/Layout';
import StatCard from '@/components/ui/stat-card';
import { Model, Database, Edit } from 'lucide-react';

const Dashboard = () => {
  const recentModels = [
    { name: 'GPT-4 Fine-tuned', updatedAt: '2h ago' },
    { name: 'BERT Base', updatedAt: '5h ago' }
  ];
  
  const recentDatasets = [
    { name: 'NLP Training Set', updatedAt: '1d ago' },
    { name: 'Image Classification', updatedAt: '2d ago' }
  ];

  return (
    <Layout title="Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard 
          title="Active Models" 
          value="24" 
          icon={<Model className="h-6 w-6" />} 
        />
        
        <StatCard 
          title="Datasets" 
          value="156" 
          icon={<Database className="h-6 w-6" />} 
        />
        
        <StatCard 
          title="Tests Run" 
          value="1,284" 
          icon={<Edit className="h-6 w-6" />} 
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-md shadow-sm p-6">
          <h2 className="text-lg font-medium mb-4">Recent Models</h2>
          <div className="space-y-4">
            {recentModels.map((model, index) => (
              <div key={index} className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <Model className="w-5 h-5 text-gray-500" />
                  <span>{model.name}</span>
                </div>
                <span className="text-sm text-gray-500">{model.updatedAt}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-md shadow-sm p-6">
          <h2 className="text-lg font-medium mb-4">Recent Datasets</h2>
          <div className="space-y-4">
            {recentDatasets.map((dataset, index) => (
              <div key={index} className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <Database className="w-5 h-5 text-gray-500" />
                  <span>{dataset.name}</span>
                </div>
                <span className="text-sm text-gray-500">{dataset.updatedAt}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
