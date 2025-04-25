// File: src/pages/Service/components/MapComponent.js

import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import treeMarkerSVG from '../../../assets/tree-marker.svg';

const customIcon = new L.DivIcon({
  html: `<img src="${treeMarkerSVG}" style="width:40px;height:40px;" alt="Marker"/>`,
  className: '',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const MapComponent = ({ lat = 59.9139, lng = 10.7522 }) => {
  return (
    <div className="map-container" style={{ height: '300px', width: '100%', borderRadius: '12px', overflow: 'hidden' }}>
      <MapContainer
        center={[lat, lng]}
        zoom={15}
        scrollWheelZoom={false}
        dragging={false}
        doubleClickZoom={false}
        zoomControl={false}
        style={{ height: '100%', width: '100%' }}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={[lat, lng]} icon={customIcon} />
      </MapContainer>
    </div>
  );
};

export default MapComponent;