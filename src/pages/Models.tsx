
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import ModelCard from '@/components/ui/model-card';
import { Button } from '@/components/ui/button';
import { Plus, FileImage, Cpu, Atom, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
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
  const [modelsList, setModelsList] = useState([
    {
      title: 'Medical MNIST Image Classification',
      version: 'v2.1.0',
      accuracy: '92.2%',
      requests: '500K',
      lastUpdated: '1h ago',
      isActive: true,
      dataset: 'MNIST Image Classification'
    },
    {
      title: 'Image Classification',
      version: 'v2.0.1',
      accuracy: '98.5%',
      requests: '1.2M',
      lastUpdated: '2h ago',
      isActive: true,
      dataset: 'MNIST Image Classification'
    },
    {
      title: 'Text Generation',
      version: 'v1.5.0',
      accuracy: '96.2%',
      requests: '800K',
      lastUpdated: '1d ago',
      isActive: false,
      dataset: 'NIH Chest X-ray'
    },
    {
      title: 'Object Detection',
      version: 'v1.2.3',
      accuracy: '94.8%',
      requests: '500K',
      lastUpdated: '3d ago',
      isActive: false,
      dataset: 'Kaggle Heart Disease'
    }
  ]);
  
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleToggleActive = (index: number) => {
    const newModels = [...modelsList];
    newModels[index].isActive = !newModels[index].isActive;
    setModelsList(newModels);
    
    const message = newModels[index].isActive 
      ? `${newModels[index].title} is now active`
      : `${newModels[index].title} is now inactive`;
      
    toast({
      title: "Model Status Changed",
      description: message,
      duration: 3000
    });
  };

  const filteredModels = modelsList.filter(model => 
    model.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const modelTypes = [
    {
      name: "CNN",
      icon: <Cpu className="h-4 w-4 mr-2" />,
      datasets: ["MNIST Image Classification", "NIH Chest X-ray", "Kaggle Heart Disease"]
    },
    {
      name: "QCNN",
      icon: <Atom className="h-4 w-4 mr-2" />,
      datasets: ["MNIST Image Classification", "NIH Chest X-ray", "Kaggle Heart Disease"]
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
              <span>MNIST Image Classification</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FileImage className="h-4 w-4 mr-2" />
              <span>NIH Chest X-ray</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FileImage className="h-4 w-4 mr-2" />
              <span>Kaggle Heart Disease</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          className="pl-10 pr-4"
          type="text"
          placeholder="Search models..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredModels.map((model, index) => (
          <ModelCard
            key={index}
            title={model.title}
            version={model.version}
            accuracy={model.accuracy}
            requests={model.requests}
            lastUpdated={model.lastUpdated}
            isActive={model.isActive}
            onToggleActive={() => handleToggleActive(index)}
          />
        ))}
      </div>
      
      {filteredModels.length === 0 && (
        <div className="flex flex-col items-center justify-center py-8">
          <p className="text-gray-500 text-lg">No models found matching "{searchQuery}"</p>
        </div>
      )}
    </Layout>
  );
};

export default Models;
