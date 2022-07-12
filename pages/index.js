import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_2021_11R_BIRDI_GOOGLE_API_KEY,
  });

  const defaultLocation = {
    lat: 40.71427,
    lng: -74.00597,
  };

  const mapContainerStyle = {
    width: "100%",
    height: "600px",
  };
  const renderMap = () => {
    return (
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={defaultLocation}
      />
    );
  };

  return isLoaded ? renderMap() : <p>Loading...</p>;
}
