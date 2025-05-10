
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapBoxProps {
  center: [number, number];
  zoom?: number;
  markers?: Array<{
    id: string;
    coordinates: [number, number];
    color?: string;
    popup?: string;
  }>;
  onMarkerClick?: (id: string) => void;
  height?: string;
  mapStyle?: string;
}

const MapBox = ({ 
  center, 
  zoom = 8, 
  markers = [], 
  onMarkerClick,
  height = "400px",
  mapStyle = 'mapbox://styles/mapbox/streets-v12'
}: MapBoxProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>("");
  const [mapLoaded, setMapLoaded] = useState(false);

  // Check if MAPBOX_TOKEN is available in local storage
  useEffect(() => {
    const storedToken = localStorage.getItem("MAPBOX_TOKEN");
    if (storedToken) {
      setMapboxToken(storedToken);
    }
  }, []);

  const handleTokenSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const token = (form.elements.namedItem('mapbox-token') as HTMLInputElement).value;
    localStorage.setItem("MAPBOX_TOKEN", token);
    setMapboxToken(token);
  };

  // Initialize and configure the map
  useEffect(() => {
    if (!mapboxToken || !mapContainer.current || map.current) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: mapStyle,
      center: [center[1], center[0]], // MapBox uses [lng, lat] format
      zoom: zoom
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    map.current.on('load', () => {
      setMapLoaded(true);
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [mapboxToken, mapStyle, center, zoom]);

  // Add markers when the map is loaded
  useEffect(() => {
    if (!mapLoaded || !map.current) return;

    // Clear existing markers
    const markerElements = document.querySelectorAll('.mapboxgl-marker');
    markerElements.forEach(marker => marker.remove());

    // Add new markers
    markers.forEach(marker => {
      const markerElement = document.createElement('div');
      markerElement.className = 'marker';
      markerElement.style.width = '16px';
      markerElement.style.height = '16px';
      markerElement.style.borderRadius = '50%';
      markerElement.style.backgroundColor = marker.color || '#4CAF50';
      markerElement.style.border = '2px solid white';
      markerElement.style.boxShadow = '0 0 2px rgba(0,0,0,0.3)';
      markerElement.style.cursor = 'pointer';

      const mapboxMarker = new mapboxgl.Marker(markerElement)
        .setLngLat([marker.coordinates[1], marker.coordinates[0]]) // MapBox uses [lng, lat] format
        .addTo(map.current!);

      if (marker.popup) {
        const popup = new mapboxgl.Popup({ offset: 25 })
          .setHTML(`<p>${marker.popup}</p>`);
        mapboxMarker.setPopup(popup);
      }

      if (onMarkerClick) {
        markerElement.addEventListener('click', () => {
          onMarkerClick(marker.id);
        });
      }
    });
  }, [markers, mapLoaded, onMarkerClick]);

  if (!mapboxToken) {
    return (
      <div className="flex flex-col items-center justify-center p-4 border rounded-lg bg-white dark:bg-gray-800" style={{ height }}>
        <h3 className="text-lg font-semibold mb-4">MapBox API Token Required</h3>
        <p className="mb-4 text-center">Please enter your MapBox public token to enable the map</p>
        <form onSubmit={handleTokenSubmit} className="w-full max-w-md">
          <div className="flex">
            <input 
              type="text" 
              name="mapbox-token" 
              placeholder="Enter your MapBox public token"
              className="flex-1 p-2 border rounded-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              type="submit" 
              className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700"
            >
              Save
            </button>
          </div>
          <p className="text-xs mt-2">
            To get a MapBox token, visit <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">mapbox.com</a> and create an account
          </p>
        </form>
      </div>
    );
  }

  return (
    <div ref={mapContainer} className="rounded-lg overflow-hidden" style={{ height, width: '100%' }} />
  );
};

export default MapBox;
