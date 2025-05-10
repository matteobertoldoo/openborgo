
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Map from '@/components/Map';
import { regions } from '@/data/mockData';

interface RegionMapProps {
  hoveredRegion?: string | null;
}

const RegionMap: React.FC<RegionMapProps> = ({ hoveredRegion }) => {
  const navigate = useNavigate();
  
  // Transform region data for the map
  const markers = regions.map(region => ({
    id: region.id,
    coordinates: [region.coordinates.lng, region.coordinates.lat] as [number, number],
    color: hoveredRegion === region.id ? '#E53E3E' : (region.featured ? '#F59E0B' : '#3B82F6')
  }));

  const handleMarkerClick = (id: string) => {
    navigate(`/regions/${id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="relative h-[400px] rounded-lg overflow-hidden">
        <Map 
          center={[12.5674, 41.8719]} 
          zoom={4.5} 
          markers={markers} 
          onMarkerClick={handleMarkerClick} 
        />
      </div>
    </div>
  );
};

export default RegionMap;
