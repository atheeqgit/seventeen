import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useGlobalContext } from "../context";
import Mybutton from "../components/mybutton/Mybutton";

// Fixing marker icon issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const LocationMarker = ({ setLocation }) => {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setLocation({ latitude: lat, longitude: lng });
    },
  });

  return null;
};

const UserLocationWithClick = ({ setLocation, location }) => {
  const [error, setError] = useState(null);

  const getGeolocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      (err) => {
        setError(err.message);
      }
    );
  };
  useEffect(() => {
    getGeolocation();
  }, []);

  return (
    <div>
      <p className="text-3xl text-center capitalize font-semibold text-[#2516ff] mb-4">
        Please verify and select your location correctly by clicking
      </p>
      {error ? (
        <>
          <p className="text-2xl text-center capitalize font-semibold text-[#ce1616] mb-4">
            Error:{error}
          </p>
        </>
      ) : location.latitude && location.longitude ? (
        <div className="h-[50vh] ">
          <MapContainer
            center={[location.latitude, location.longitude]}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* When user clicks on map, it updates location */}
            <LocationMarker setLocation={setLocation} />

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

export default UserLocationWithClick;
