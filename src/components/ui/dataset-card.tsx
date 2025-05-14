
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Database } from 'lucide-react';

interface DatasetCardProps {
  title: string;
  description: string;
  size: string;
  lastUpdated: string;
  tags: string[];
  isActive?: boolean;
  onClick?: () => void;
}

const DatasetCard = ({
  title,
  description,
  size,
  lastUpdated,
  tags,
  isActive = false,
  onClick
}: DatasetCardProps) => {
  return (
    <Card className="testbed-card cursor-pointer" onClick={onClick}>
      <CardHeader className="flex flex-row items-start space-y-0 pb-2">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <CardTitle className="text-lg">{title}</CardTitle>
            {isActive && (
              <Badge variant="default" className="ml-2">Active</Badge>
            )}
          </div>
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        </div>
        <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center">
          <Database className="w-5 h-5 text-gray-600" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Size: {size}</span>
            <span>•</span>
            <span>Updated: {lastUpdated}</span>
          </div>
          <div className="flex gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline">{tag}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DatasetCard;
