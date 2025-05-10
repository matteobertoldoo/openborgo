
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { useMemo } from 'react';

interface MapProps {
  center: [number, number];
  zoom?: number;
  markers?: Array<{
    id: string;
    coordinates: [number, number];
    color?: string;
    icon?: string;
  }>;
  onMarkerClick?: (id: string) => void;
}

const Map = ({ center, zoom = 1, markers = [], onMarkerClick }: MapProps) => {
  const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

  const markersWithColors = useMemo(() => 
    markers.map(marker => ({
      ...marker,
      color: marker.color || '#4CAF50' // Default to green if no color specified
    })), 
    [markers]
  );

  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          center: center,
          scale: 1000 * zoom
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
              />
            ))
          }
        </Geographies>
        {markersWithColors.map(({ id, coordinates, color }) => (
          <Marker 
            key={id} 
            coordinates={coordinates}
            onClick={() => onMarkerClick ? onMarkerClick(id) : undefined}
          >
            <circle
              r={8}
              fill={color}
              stroke="#fff"
              strokeWidth={2}
              style={{ cursor: onMarkerClick ? 'pointer' : 'default' }}
            />
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default Map;
