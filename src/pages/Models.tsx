
import React from 'react';
import Layout from '@/components/layout/Layout';
import ModelCard from '@/components/ui/model-card';
import { Button } from '@/components/ui/button';
import { Plus, FileImage, Cpu, Atom } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Models = () => {
  const models = [
    {
      title: 'Medical MNIST Image Classification',
      version: 'v2.1.0',
      accuracy: '92.2%',
      requests: '500K',
      lastUpdated: '1h ago',
      isActive: true
    },
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

  const modelTypes = [
    {
      name: "CNN",
      icon: <Cpu className="h-4 w-4 mr-2" />,
      datasets: ["Medical MNIST", "NIH", "Kaggle Heart Disease"]
    },
    {
      name: "QCNN",
      icon: <Atom className="h-4 w-4 mr-2" />,
      datasets: ["Medical MNIST", "NIH", "Kaggle Heart Disease"]
    }
  ];

  return (
    <Layout title="Models">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-gray-600">Manage and monitor your AI models</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              New Model
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>Model Types</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuLabel className="font-normal text-xs text-gray-500 py-1">Classical Models</DropdownMenuLabel>
              {modelTypes.filter(model => model.name === "CNN").map((model) => (
                <DropdownMenuItem key={model.name}>
                  {model.icon}
                  <span>{model.name}</span>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuLabel className="font-normal text-xs text-gray-500 py-1">Quantum Models</DropdownMenuLabel>
              {modelTypes.filter(model => model.name === "QCNN").map((model) => (
                <DropdownMenuItem key={model.name}>
                  {model.icon}
                  <span>{model.name}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuLabel className="font-normal text-xs text-gray-500 py-1">Available Datasets</DropdownMenuLabel>
            <DropdownMenuItem>
              <FileImage className="h-4 w-4 mr-2" />
              <span>Medical MNIST</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FileImage className="h-4 w-4 mr-2" />
              <span>NIH</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FileImage className="h-4 w-4 mr-2" />
              <span>Kaggle Heart Disease</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
