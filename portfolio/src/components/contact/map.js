import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styled from "styled-components";

const cities = [
  {
    name: "BLR",
    latitude: 12.972442,
    longitude: 77.580643,
    color: "red",
  },
];

const CitiInfo = styled.div`
  height: 100px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.color};
`;

const bounds = [
  [12.972442, 77.580643],
  [12.972442, 77.580643], // Same coordinates as the marker position
];

export default class Map extends Component {
  render() {
    return (
      <MapContainer
        center={[12.972442, 77.580643]} // Set the center to Bengaluru's coordinates
        zoom={13} // Set an appropriate zoom level
        style={{
          height: 500,
          width: "50%",
          backgroundColor: "black",
        }}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" // Dark mode tile layer
        />
        {cities.map((city) => (
          <Marker
            key={city.name}
            position={[city.latitude, city.longitude]}
            onClick={() => console.log("onClick")}
          >
            <Popup closeButton={false}>
              <CitiInfo color={city.color}>{city.name} chart</CitiInfo>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    );
  }
}
