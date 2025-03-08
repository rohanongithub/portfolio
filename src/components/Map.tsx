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

    // Bengaluru city center coordinates
    const bengaluruLng = 77.5946;
    const bengaluruLat = 12.9716;

    // Flight path that crosses near the Bengaluru marker
    // Start to the bottom-right of Bengaluru
    const startLng = bengaluruLng + 0.06;  // Bottom right of Bengaluru
    const startLat = bengaluruLat - 0.06;
    // End to the top-left of Bengaluru
    const endLng = bengaluruLng - 0.06;   // Top left of Bengaluru
    const endLat = bengaluruLat + 0.06;
    
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: {
        version: 8,
        sources: {
          osm: {
            type: 'raster',
            tiles: ['https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}@2x.png'],
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
            maxzoom: 22,
          },
        ],
      },
      center: [bengaluruLng, bengaluruLat],
      zoom: 12, // Zoom in slightly to better see the intersection
      dragRotate: false,
      attributionControl: false,
      maxPitch: 0, // Keep the map flat
    });

    // Add a custom marker for Bengaluru with a pulsing effect
    const markerElement = document.createElement('div');
    markerElement.className = 'custom-marker';
    markerElement.innerHTML = `
      <div class="marker-dot"></div>
      <div class="marker-pulse"></div>
    `;

    // Add marker for Bengaluru city center
    new maplibregl.Marker({
      element: markerElement,
      color: '#00D8FF',
      scale: 1.2
    })
      .setLngLat([bengaluruLng, bengaluruLat])
      .addTo(map.current);

    // Create airplane element with improved SVG
    const airplaneElement = document.createElement('div');
    airplaneElement.className = 'airplane-marker';
    airplaneElement.innerHTML = `
      <div class="airplane">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36">
          <g fill="#FFFFFF">
            <!-- Main aircraft body -->
            <path d="M12,2L4,10L4,16L12,14L20,16L20,10L12,2Z" />
            <!-- Wings -->
            <path d="M5,10L12,8L19,10L12,12L5,10Z" />
            <!-- Tail -->
            <path d="M12,14L12,18L16,19L16,15.5L12,14Z" />
            <path d="M12,14L12,18L8,19L8,15.5L12,14Z" />
            <!-- Windows -->
            <path fill="#00D8FF" d="M7.5,10.5A0.5,0.5 0 0,1 8,10A0.5,0.5 0 0,1 8.5,10.5A0.5,0.5 0 0,1 8,11A0.5,0.5 0 0,1 7.5,10.5Z" />
            <path fill="#00D8FF" d="M9.5,10.5A0.5,0.5 0 0,1 10,10A0.5,0.5 0 0,1 10.5,10.5A0.5,0.5 0 0,1 10,11A0.5,0.5 0 0,1 9.5,10.5Z" />
            <path fill="#00D8FF" d="M11.5,10.5A0.5,0.5 0 0,1 12,10A0.5,0.5 0 0,1 12.5,10.5A0.5,0.5 0 0,1 12,11A0.5,0.5 0 0,1 11.5,10.5Z" />
            <path fill="#00D8FF" d="M13.5,10.5A0.5,0.5 0 0,1 14,10A0.5,0.5 0 0,1 14.5,10.5A0.5,0.5 0 0,1 14,11A0.5,0.5 0 0,1 13.5,10.5Z" />
            <path fill="#00D8FF" d="M15.5,10.5A0.5,0.5 0 0,1 16,10A0.5,0.5 0 0,1 16.5,10.5A0.5,0.5 0 0,1 16,11A0.5,0.5 0 0,1 15.5,10.5Z" />
          </g>
          <!-- Outline for visibility -->
          <path fill="none" stroke="#333" stroke-width="0.3" d="M12,2L4,10L4,16L12,14L20,16L20,10L12,2Z M5,10L12,8L19,10L12,12L5,10Z M12,14L12,18L16,19L16,15.5L12,14Z M12,14L12,18L8,19L8,15.5L12,14Z" />
        </svg>
        <div class="airplane-shadow"></div>
      </div>
    `;

    // Add airplane marker starting from bottom right
    airplaneMarker.current = new maplibregl.Marker({
      element: airplaneElement,
      scale: 1.2,
      // Remove rotation since we're handling it in CSS
    })
      .setLngLat([startLng, startLat])
      .addTo(map.current);

    // Animate the airplane to fly from bottom right to top left very slowly
    let step = 0;
    const maxSteps = 1500; // Significantly increased for very slow movement
    const frameDelay = 50; // Add frame delay to slow down even more (milliseconds between frames)
    
    const animateAirplane = () => {
      if (!map.current || !airplaneMarker.current) return;

      step++;
      
      // Calculate current position with gentle easing for a smoother slow flight
      const progress = Math.min(step / maxSteps, 1);
      // Smoother easing function
      const easedProgress = progress < 0.5 
        ? 2 * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      
      const currentLng = startLng + (endLng - startLng) * easedProgress;
      const currentLat = startLat + (endLat - startLat) * easedProgress;
      
      // Add subtle vertical variation for a more realistic flight path
      const verticalVariation = Math.sin(step / 30) * 0.002;
      
      // Update airplane position
      airplaneMarker.current.setLngLat([currentLng, currentLat + verticalVariation]);
      
      // Continue animation if not completed
      if (step < maxSteps) {
        setTimeout(() => {
          requestAnimationFrame(animateAirplane);
        }, frameDelay);
      } else {
        // Reset and loop the animation
        step = 0;
        setTimeout(() => {
          // Return to start position instantly
          airplaneMarker.current?.setLngLat([startLng, startLat]);
          requestAnimationFrame(animateAirplane);
        }, 5000); // Longer pause (5 seconds) before restarting
      }
    };

    // Start the animation once map is loaded
    map.current.on('load', () => {
      animateAirplane();
    });
    
    // Add navigation controls
    map.current.addControl(new maplibregl.NavigationControl({
      showCompass: false
    }), 'top-right');

    // Add attribution in a more stylish way
    map.current.addControl(new maplibregl.AttributionControl({
      compact: true
    }));

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div 
      ref={mapContainer} 
      className="w-full h-48 rounded-lg overflow-hidden mt-4 shadow-lg"
      style={{ 
        minHeight: '192px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
      }}
    />
  );
}; 