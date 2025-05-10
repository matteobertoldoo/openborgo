
import React from 'react';
import { Link } from 'react-router-dom';
import { regions } from '@/data/mockData';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Mountain } from 'lucide-react';

interface RegionsListProps {
  searchQuery?: string;
}

const RegionsList: React.FC<RegionsListProps> = ({ searchQuery = '' }) => {
  // Filter regions based on search query
  const filteredRegions = regions.filter(region => 
    region.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    region.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredRegions.map((region) => (
        <Link 
          key={region.id}
          to={`/regions/${region.id}`}
          className="group"
        >
          <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <img 
                src={region.image} 
                alt={region.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>{region.name}</CardTitle>
                {region.featured && <Badge className="bg-amber-500">Featured</Badge>}
              </div>
              <CardDescription>{region.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-sm text-gray-600">Italy</span>
                </div>
                <div className="flex items-center">
                  <Mountain className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-sm text-gray-600">
                    {region.id === 'tuscany' ? '12' : 
                     region.id === 'umbria' ? '8' : 
                     region.id === 'puglia' ? '10' : 
                     region.id === 'sicily' ? '15' : '6'} villages to explore
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                Explore Region
              </Button>
            </CardFooter>
          </Card>
        </Link>
      ))}

      {filteredRegions.length === 0 && (
        <div className="col-span-full text-center py-12">
          <h3 className="text-xl font-medium mb-2">No regions found</h3>
          <p className="text-gray-500">Try adjusting your search criteria</p>
        </div>
      )}
    </div>
  );
};

export default RegionsList;
