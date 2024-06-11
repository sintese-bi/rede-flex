"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
export default function Leaflet() {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      className="h-full w-full rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          <div className="flex flex-row w-[200px] h-8 items-center gap-4">
            <strong>Rank: </strong>
            <p>_</p>
          </div>
          <div className="flex flex-row w-[200px] h-8 items-center gap-4">
            <strong>Postos: </strong>
            <p>_</p>
          </div>
          <div className="flex flex-row w-[200px] h-8 items-center gap-4">
            <strong>Abastecimento: </strong>
            <p>_</p>
          </div>
          <div className="flex flex-row w-[200px] h-8 items-center gap-4">
            <strong>TMP: </strong>
            <p>_</p>
          </div>
          <div className="flex flex-row w-[200px] h-8 items-center gap-4">
            <strong>Meta: </strong>
            <p>_</p>
          </div>
          <div className="flex flex-row w-[200px] h-8 items-center gap-4">
            <strong>Desempenho: </strong>
            <p>_</p>
          </div>
          <div className="flex flex-row w-[200px] h-8 items-center gap-4">
            <strong>Enviar relatório: </strong>
            <p>_</p>
          </div>
          <div className="flex flex-row w-[200px] h-8 items-center gap-4">
            <strong>Postos em alerta: </strong>
            <p>_</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
