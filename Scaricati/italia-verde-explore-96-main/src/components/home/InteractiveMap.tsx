import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { regions } from '@/data/mockData';

export default function InteractiveMap() {
  const navigate = useNavigate();
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  
  return (
    <section className="py-16 bg-openborgo-beige/30">
      <div className="container mx-auto px-4">
 
        
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
      </div>
    </section>
  );
}
