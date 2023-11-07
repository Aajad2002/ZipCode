import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import L from 'leaflet';

const Location = ({ location, clearLocation }) => {
    console.log(location)
    const customIcon = new L.Icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/128/684/684908.png', // Path to the custom marker image
        iconSize: [32, 32], // Size of the icon
        iconAnchor: [16, 32], // Anchor point of the icon (relative to its size)
        popupAnchor: [0, -32], // Popup anchor point (relative to its size)
    });
    return (
        <div>
            {location ? (
                <div>
                    <div>

                        <h2>Location Information</h2>
                        <p>Country: {location.country}</p>
                        <p>State: {location.places[0].state}</p>
                        <p>Place Name: {location.places[0]["place name"]}</p>
                        <button onClick={clearLocation}>Clear</button>
                    </div>
                    <div style={{ width: "100%", height: "400px", overflow: 'hidden' }}>

                        <MapContainer center={{ lat: location.places[0]["latitude"], lng: location.places[0]["longitude"] }} zoom={10} style={{ height: '400px', width: '100%' }}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?lang=en"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            {location.places.map((el, i) => {
                                console.log(el)
                                return <Marker key={i} position={{ lat: el['latitude'], lng: el['longitude'] }} icon={customIcon}>
                                    <Popup>
                                        <p>{el["place name"]}</p>
                                    </Popup>
                                </Marker>
                            })}
                        </MapContainer>
                    </div>

                </div>
            ) : null}
        </div>
    );
};

export default Location;
