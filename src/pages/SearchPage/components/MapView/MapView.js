// src/pages/SearchPage/components/MapView/MapView.js
import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import './MapView.css';
import 'leaflet/dist/leaflet.css';

/**
 * PriceMarker Component
 * 
 * Creates a custom marker showing the price of the service
 */
const PriceMarker = ({ map, position, price, result }) => {
  useEffect(() => {
    if (!map) return;

    // Create a custom HTML element for the price marker
    const markerHtml = document.createElement('div');
    markerHtml.className = 'price-marker';
    markerHtml.innerHTML = `€${typeof price === 'number' ? Math.round(price) : price}`;

    // Create a custom icon with the price marker HTML
    const customIcon = L.divIcon({
      className: 'custom-price-marker',
      html: markerHtml,
      iconSize: [60, 30],
      iconAnchor: [30, 15],
      popupAnchor: [0, -15]
    });

    // Create the marker with the custom icon
    const marker = L.marker(position, { icon: customIcon });
    
    // Create popup content
    const popupContent = `
      <div class="map-popup">
        <h3>${result.name}</h3>
        <p>${result.address}</p>
        <div class="popup-rating">
          <span class="stars">★</span>
          <span>${result.rating.toFixed(1)}</span>
          <span class="reviews">(${result.reviews})</span>
        </div>
        <div class="popup-service">
          <strong>${result.services[0].name}</strong>
          <span>€${result.services[0].price}</span>
        </div>
        <button class="popup-btn">View Details</button>
      </div>
    `;
    
    // Add popup to marker
    marker.bindPopup(popupContent);
    
    // Add marker to map
    marker.addTo(map);
    
    // Clean up on unmount
    return () => {
      map.removeLayer(marker);
    };
  }, [map, position, price, result]);

  return null;
};

/**
 * MapController Component
 * 
 * Controls the map view and adds markers
 */
const MapController = ({ results }) => {
  const map = useMap();
  
  useEffect(() => {
    if (results && results.length > 0) {
      // Create bounds from all marker positions
      const bounds = L.latLngBounds(
        results.map(result => [result.location.lat, result.location.lng])
      );
      
      // Fit the map to these bounds with some padding
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [map, results]);
  
  return (
    <>
      {results.map(result => {
        // Get the lowest price service for the marker
        const lowestPriceService = result.services.reduce(
          (min, service) => (service.price < min.price ? service : min),
          result.services[0]
        );
        
        return (
          <PriceMarker
            key={result.id}
            map={map}
            position={[result.location.lat, result.location.lng]}
            price={lowestPriceService.price}
            result={result}
          />
        );
      })}
    </>
  );
};

/**
 * MapView Component
 * 
 * Displays an interactive map with custom price markers
 */
const MapView = ({ results }) => {
  const [mapCenter] = useState([52.4862, -1.8904]);
  const [mapZoom] = useState(13);
  const mapRef = useRef(null);

  return (
    <div className="map-view">
      <MapContainer 
        center={mapCenter} 
        zoom={mapZoom} 
        style={{ height: '100%', width: '100%' }}
        ref={mapRef}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        <MapController results={results} />
      </MapContainer>
      
      {/* Custom map controls */}
      <div className="map-controls">
        <button className="map-control zoom-in" aria-label="Zoom in">+</button>
        <button className="map-control zoom-out" aria-label="Zoom out">−</button>
        <button className="map-control fullscreen" aria-label="Toggle fullscreen">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3V9H5V5H9V3H3Z" fill="currentColor"/>
            <path d="M3 21H9V19H5V15H3V21Z" fill="currentColor"/>
            <path d="M21 3H15V5H19V9H21V3Z" fill="currentColor"/>
            <path d="M15 21H21V15H19V19H15V21Z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MapView;