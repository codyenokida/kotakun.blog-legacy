"use client";

import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import dynamic from "next/dynamic";

import styles from "./NowMap.module.scss";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

type Props = {
  lat: number;
  lon: number;
};

export default function Map({ lat, lon }: Props) {
  return (
    <MapContainer
      center={[lat, lon]}
      zoom={10}
      scrollWheelZoom={true}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lon]}></Marker>
    </MapContainer>
  );
}
