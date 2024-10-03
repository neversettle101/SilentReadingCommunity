// src/MapComponent.js
import React, { useState } from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

const MapComponent = ({ data }) => {
    const mapStyles = {
        height: "100vh",
        width: "100%",
    };

    const initialCenter = {
        lat: 21.0000, lng: 78.0000
    };

    const [mapCenter, setMapCenter] = useState(initialCenter);
    const [zoomLevel, setZoomLevel] = useState(5);

    const handleZoomToLocation = (location) => {
        setMapCenter(location);
        setZoomLevel(15); // Change zoom level to zoom in
    };

    return (
        <LoadScript
            googleMapsApiKey=" "
        >
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={zoomLevel}
                center={mapCenter}
            >
                {data.map((item, index) => (
                    <MarkerF key={index} position={item.location} />
                ))}
            </GoogleMap>

            <div style={{ position: 'absolute', top: 10, left: 10 }}>
                {/* {locations.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => handleZoomToLocation(item.location)}
                        style={{ display: 'block', marginBottom: '5px' }}
                    >
                        Zoom to {item.name}
                    </button>
                ))} */}
            </div>
        </LoadScript>
    );
}

export default MapComponent;
