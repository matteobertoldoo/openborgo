import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import MapBox from '@/components/MapBox';
import { regions } from '@/data/mockData';

export default function InteractiveMap() {
  const navigate = useNavigate();
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  
  // Transform region data for the map
  const mapMarkers = regions.map(region => ({
    id: region.id,
    coordinates: [region.coordinates.lat, region.coordinates.lng] as [number, number],
    color: selectedRegion === region.id ? '#E53E3E' : (region.featured ? '#F59E0B' : '#3B82F6'),
    popup: region.name
  }));

  const handleMarkerClick = (id: string) => {
    navigate(`/regions/${id}`);
  };
  
  return (
    <section className="py-16 bg-openborgo-beige/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl mb-4">
            Explore Italia's Enchanting Regions
          </h2>
          <p className="text-lg text-gray-700">
            Explore our hand-picked villages by regions.
          </p>
        </div>
        
        {/* Interactive Map */}
        <div className="bg-white rounded-xl shadow-xl p-6 mb-10 relative overflow-hidden h-[500px]">
          <MapBox 
            center={[41.8719, 12.5674]} 
            zoom={5} 
            markers={mapMarkers}
            onMarkerClick={handleMarkerClick}
            height="420px"
          />
        </div>
        
        {/* Region cards */}
        <div className="flex overflow-x-auto pb-4 gap-6">
          {regions.map((region) => (
            <Card key={region.id} className="hover-lift overflow-hidden flex-shrink-0 w-[300px] flex flex-col justify-between">
              <div>
                <div className="h-48 overflow-hidden">
                  <img 
                    src={region.image} 
                    alt={region.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{region.name}</CardTitle>
                    {region.featured && <Badge variant="gold">Featured</Badge>}
                  </div>
                  <CardDescription>{region.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    {region.id === 'tuscany' ? '12' : 
                     region.id === 'umbria' ? '8' : 
                     region.id === 'puglia' ? '10' : 
                     region.id === 'sicily' ? '15' : '6'} villages to explore
                  </p>
                </CardContent>
              </div>
              <CardFooter className="flex justify-center mt-auto">
                <Button 
                  className="w-full font-semibold"
                  onClick={() => navigate(`/regions/${region.id}`)}
                >
                  {`Explore ${region.name}`}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <p className="mb-2 text-lg font-medium">
            Not sure where to go?<br />
            <span className="font-normal">Discover all stays in Italy's hidden villages</span>
          </p>
          <Button 
            variant="outline"
            onClick={() => navigate('/regions')}
          >
            View all villages
          </Button>
        </div>
      </div>
    </section>
  );
}
