"use client";

import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import dynamic from "next/dynamic";

import styles from "./NowMap.module.scss";

type Props = {
  lat: number;
  lon: number;
};

export default function NowMap({ lat, lon }: Props) {
  // Dynamic import of a React component
  const Map = dynamic(() => import("@/components/Map"), {
    loading: () => <div className={styles.map}></div>,
    ssr: false,
  });

  return (
    <div className={styles.map}>
      <Map lat={lat} lon={lon} />
    </div>
  );
}
