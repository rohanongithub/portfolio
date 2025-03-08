'use client';

import { useEffect, useRef } from 'react';


import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Bengaluru coordinates
    const bengaluruLng = 77.5946;
    const bengaluruLat = 12.9716;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: {
        version: 8,
        sources: {
          'osm': {
            type: 'raster',
            tiles: ['https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}@2x.png'],
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
            maxzoom: 22
          }
        ]
      },
      center: [bengaluruLng, bengaluruLat],
      zoom: 11
    });

    // Add navigation control
    map.current.addControl(new maplibregl.NavigationControl({
      showCompass: false
    }));

    // Create custom marker element with pulsing effect
    const markerElement = document.createElement('div');
    markerElement.className = 'custom-marker';
    markerElement.innerHTML = `
      <div class="marker-dot"></div>
      <div class="marker-pulse"></div>
    `;

    // Add marker for Bengaluru
    new maplibregl.Marker({
      element: markerElement,
      color: '#00D8FF',
      scale: 1.2
    })
      .setLngLat([bengaluruLng, bengaluruLat])
      .addTo(map.current);

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div 
      ref={mapContainer} 
      className="w-full h-64 rounded-lg overflow-hidden"
      style={{
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
      }}
    />
  );
}; 