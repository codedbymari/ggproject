import React, { useState, useEffect, useRef, useMemo } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import './MapView.css';
import 'leaflet/dist/leaflet.css';


const PriceMarker = ({ map, position, price, result }) => {
  useEffect(() => {
    if (!map) return;

    //  HTML for the price marker + currency sign
    const markerHtml = `<div class="price-marker">£${typeof price === 'number' ? Math.round(price) : price}</div>`;

    // Custom icon with the price marker 
    const customIcon = L.divIcon({
      className: 'custom-price-marker',
      html: markerHtml,
      iconSize: [60, 30],
      iconAnchor: [30, 15],
      popupAnchor: [0, -15]
    });

    // Marker with the custom icon
    const marker = L.marker(position, { 
      icon: customIcon,
      bubblingMouseEvents: false
    });
    
    // Here's where you can swap the Leaflet marker with Google Maps marker
    // Just make sure it displays the price in the same style as in the code 
    
    // popup content when you click the pricemarker
    marker.on('click', function() {
      if (!this.getPopup()) {
        this.bindPopup(`
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
              <span>£${result.services[0].price}</span>
            </div>
            <button class="popup-btn">View Details</button>
          </div>
        `, {
          closeButton: true,
          autoPan: true
        });
        this.openPopup();
      }
    });
    
    // Adds marker to map
    marker.addTo(map);
    
    return () => {
      map.removeLayer(marker);
    };
  }, [map, position, price, result]);

  return null;
};

/* Controls the map view and adds markers on mobile screens */
const MapController = ({ results, isMobile }) => {
  const map = useMap();
  const firstRenderRef = useRef(true);
  
  // When switching to Google Maps, implement map controls here 
  // to keep the same centering and zoom behavior on mobile and desktop
  

  // Optimized centering logic with priority for mobile
  useEffect(() => {
    if (!results || results.length === 0) return;

    // First render optimization
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      
      const firstResult = results[0];
      const firstPos = [firstResult.location.lat, firstResult.location.lng];
      
      // For mobile,  higher zoom and immediate centering for faster  performance
      if (isMobile) {
        // Immediate centering on first result
        map.setView(firstPos, 15, { animate: false, duration: 0 });
        
        // Force immediate redraw to prevent blank screen on mobile
        setTimeout(() => {
          map.invalidateSize({ pan: false });
        }, 50);
      } else {
        map.setView(firstPos, 14, { animate: false });
        
        setTimeout(() => {
          const bounds = L.latLngBounds(
            results.map(result => [result.location.lat, result.location.lng])
          );
          map.fitBounds(bounds, { padding: [50, 50], animate: true, duration: 0.5 });
        }, 100);
      }
    }
  }, [map, results, isMobile]);
  
  // Optimize marker rendering with fewer re-renders
  const markers = useMemo(() => {
    if (!results || !map) return [];
    
    return results.map(result => {
      // show the lowest price service marker first
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
    });
  }, [map, results]);
  
  return <>{markers}</>;
};


const MapView = ({ results, location = "London", }) => {
  const defaultCenter = [52.4862, -1.8904];
  
  const initialCenter = useMemo(() => {
    return results && results.length > 0
      ? [results[0].location.lat, results[0].location.lng]
      : defaultCenter;
  }, [results]);
  
  const [mapZoom] = useState(isMobileDevice() ? 15 : 13);
  const mapRef = useRef(null);
  const [isMobile, setIsMobile] = useState(isMobileDevice());

  function isMobileDevice() {
    return window.innerWidth < 768;
  }
  
  useEffect(() => {
    const handleResize = () => {
      const mobile = isMobileDevice();
      setIsMobile(mobile);
      
      if (mapRef.current && mobile !== isMobile) {
        mapRef.current.invalidateSize();
        if (results && results.length > 0) {
          mapRef.current.setView(
            [results[0].location.lat, results[0].location.lng],
            mobile ? 15 : 13,
            { animate: false }
          );
        }
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    if (isMobile && mapRef.current) {
      setTimeout(() => {
        mapRef.current.invalidateSize({ pan: false });
      }, 100);
    }
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile, results]);

  const handleZoomIn = () => {
    if (mapRef.current) {
      mapRef.current.setZoom(mapRef.current.getZoom() + 1);
    }
  };

  const handleZoomOut = () => {
    if (mapRef.current) {
      mapRef.current.setZoom(mapRef.current.getZoom() - 1);
    }
  };

  const handleFullScreen = () => {
    const mapElement = document.querySelector('.map-view');
    if (mapElement) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        mapElement.requestFullscreen();
      }
    }
  };

  // Get map instance reference
  const setMapRef = (map) => {
    if (map) {
      mapRef.current = map;
    }
  };

  // Here's where you can add the Google Maps component
  // Replace MapContainer below with GoogleMap but keep all the styling and props structure similar
  // Make sure to maintain the same mapRef handling for zoom controls

  return (
    <div className={`map-view ${isMobile ? 'mobile-map-view' : ''}`}>
      {/* Mobile map header */}
      {isMobile && (
        <div className="mobile-map-header">
         
          <div className="mobile-map-location">{location}</div>
        </div>
      )}
      
      <MapContainer 
        center={initialCenter} 
        zoom={mapZoom} 
        style={{ height: '100%', width: '100%' }}
        whenCreated={setMapRef}
        zoomControl={false}
        fadeAnimation={false}
        markerZoomAnimation={false}
        preferCanvas={true}
        attributionControl={false} 
      >
        {/* Replace this TileLayer with Google Maps tiles but keep the same visual style */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        <MapController results={results} isMobile={isMobile} />
      </MapContainer>
      
      {/* Custom map controls - these can remain mostly the same with Google Maps */}
      <div className="map-controls">
        <button className="map-control zoom-in" aria-label="Zoom in" onClick={handleZoomIn}>+</button>
        <button className="map-control zoom-out" aria-label="Zoom out" onClick={handleZoomOut}>−</button>
        <button className="map-control fullscreen" aria-label="Toggle fullscreen" onClick={handleFullScreen}>
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