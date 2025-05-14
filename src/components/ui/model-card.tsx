
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';

interface ModelCardProps {
  title: string;
  version: string;
  accuracy: string;
  requests: string;
  lastUpdated: string;
  isActive: boolean;
}

const ModelCard = ({
  title,
  version,
  accuracy,
  requests,
  lastUpdated,
  isActive
}: ModelCardProps) => {
  return (
    <Card className="testbed-card">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">{title}</CardTitle>
          <Badge variant={isActive ? "default" : "outline"}>
            {isActive ? "Active" : "Inactive"}
          </Badge>
        </div>
        <div className="text-sm text-gray-500">{version}</div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Accuracy</span>
            <span className="font-medium">{accuracy}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Requests</span>
            <span className="font-medium">{requests}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4 flex justify-between">
        <span className="text-sm text-gray-500">Updated {lastUpdated}</span>
        <div className="flex items-center gap-2">
          <span className="text-sm">{isActive ? "On" : "Off"}</span>
          <Switch checked={isActive} />
        </div>
      </CardFooter>
    </Card>
  );
};

export default ModelCard;
