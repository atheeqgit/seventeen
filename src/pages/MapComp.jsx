import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fixing marker icon issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// Component to update map center on location change
const ChangeView = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, map.getZoom());
  }, [center, map]);
  return null;
};

// Component to handle user click events and update location
const LocationMarker = ({ setLocation }) => {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setLocation({ latitude: lat, longitude: lng }); // Update location when map is clicked
    },
  });

  return null;
};

const MapComp = ({ setLocation, location, setCurLocation }) => {
  const [error, setError] = useState(null);

  // Fetch user's current geolocation
  const getGeolocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurLocation({ latitude, longitude });
        console.log;
        setLocation({ latitude, longitude });
      },
      (err) => {
        setError(err.message);
      }
    );
  };

  useEffect(() => {
    getGeolocation(); // Fetch user's current location when component loads
  }, []);

  return (
    <div className="w-100">
      <p className="text-3xl text-center capitalize font-semibold text-[#2516ff] mb-4">
        Please verify and select your location correctly by clicking
      </p>
      {error ? (
        <>
          <p className="text-2xl text-center capitalize font-semibold text-[#ce1616] mb-4">
            Error: {error}
          </p>
        </>
      ) : location.latitude && location.longitude ? (
        <div className="h-[80vh] w-[100vw]">
          <MapContainer
            center={[location.latitude, location.longitude]} // Initially center the map at the current location
            zoom={13}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* When user clicks on map, it updates location */}
            <LocationMarker setLocation={setLocation} />

            {/* Automatically update map center when the location changes */}
            <ChangeView center={[location.latitude, location.longitude]} />

            {/* Show marker at current location */}
            {location.latitude && location.longitude && (
              <Marker position={[location.latitude, location.longitude]}>
                <Popup>
                  You clicked here! <br /> Latitude: {location.latitude},
                  Longitude: {location.longitude}
                </Popup>
              </Marker>
            )}
          </MapContainer>
        </div>
      ) : (
        <p>Fetching location...</p>
      )}
    </div>
  );
};

export default MapComp;
