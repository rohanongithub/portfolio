'use client';

import { useEffect, useRef } from 'react';


import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const airplaneMarker = useRef<maplibregl.Marker | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: {
        version: 8,
        sources: {
          'osm': {
            type: 'raster',
            tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
            tileSize: 256,
            attribution: '&copy; OpenStreetMap Contributors'
          }
        },
        layers: [
          {
            id: 'osm',
            type: 'raster',
            source: 'osm',
            minzoom: 0,
            maxzoom: 19
          }
        ]
      },
      center: [77.5637, 12.9141], // JSSATEB coordinates
      zoom: 15
    });

    // Add navigation control
    map.current.addControl(new maplibregl.NavigationControl());

    // Add marker for JSSATEB
    new maplibregl.Marker({ color: '#FF0000' })
      .setLngLat([77.5637, 12.9141])
      .addTo(map.current);

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div 
      ref={mapContainer} 
      className="w-full h-64 rounded-lg overflow-hidden"
    />
  );
}; 