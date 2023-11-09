import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function MapComponent() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  //const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  if (!isLoaded) return <div>Loading...</div>;
  
  return (
    <div className="map-container" >
      {isLoaded ? (
        <GoogleMap
        zoom={1}
        //center={center}
        mapContainerClassName="map-container"
        style={{
          width: '100%',
          height: '500px', // Set the desired height for the map
          border: '1px solid #ccc', // Add a border for visual separation
          borderRadius: '8px', // Optional: Add border-radius for a rounded look
        }}
      >
       
      </GoogleMap>
      
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
  
}
