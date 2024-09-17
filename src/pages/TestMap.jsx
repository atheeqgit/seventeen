import React, { useState } from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapView = () => {
  const [clickedLocation, setClickedLocation] = useState(null);

  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        setClickedLocation({
          lat: e.latlng.lat,
          lon: e.latlng.lng,
        });
        console.log("Clicked Location:", e.latlng);
      },
    });

    return null;
  };

  return (
    <div>
      <MapContainer
        center={[20.5937, 78.9629]} // Default location (India)
        zoom={5}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // This should be replaced with Ola Maps URL
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker />
      </MapContainer>

      {clickedLocation && (
        <div>
          <p>Latitude: {clickedLocation.lat}</p>
          <p>Longitude: {clickedLocation.lon}</p>
        </div>
      )}
    </div>
  );
};

export default MapView;
