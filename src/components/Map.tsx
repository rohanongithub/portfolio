'use client';

import { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Bengaluru city center coordinates
    const lng = 77.5946;
    const lat = 12.9716;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: {
        version: 8,
        sources: {
          osm: {
            type: 'raster',
            tiles: ['https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}.png'],
            tileSize: 256,
            attribution: '&copy; OpenStreetMap Contributors',
          },
        },
        layers: [
          {
            id: 'osm',
            type: 'raster',
            source: 'osm',
            minzoom: 0,
            maxzoom: 19,
          },
        ],
      },
      center: [lng, lat],
      zoom: 9.5
    });

    // Add marker for Bengaluru
    new maplibregl.Marker({ color: '#00D8FF' })
      .setLngLat([lng, lat])
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(new maplibregl.NavigationControl());

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div 
      ref={mapContainer} 
      className="w-full h-48 rounded-lg overflow-hidden mt-4"
      style={{ minHeight: '192px' }}
    />
  );
}; 