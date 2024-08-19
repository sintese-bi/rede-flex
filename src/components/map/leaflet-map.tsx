"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import L from "leaflet";
export default function Leaflet({
  data,
}: {
  data: { lat: number; long: number; nomefantasia: string }[];
}) {
  var greenIcon = L.icon({
    iconUrl: "/icons/fuel.png",
    iconSize: [38, 35],
    shadowSize: [50, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76],
  });
  return (
    <MapContainer
      center={[-19.912998, -43.940933]}
      zoom={13}
      scrollWheelZoom={false}
      className="h-full w-full rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.map(
        (item: { lat: number; long: number; nomefantasia: string }, index) => (
          <Marker
            position={[item["lat"], item["long"]]}
            icon={greenIcon}
            key={index}
          >
            <Popup>
              <div className="flex flex-row w-[200px] h-8 items-center gap-4">
                <strong>Rank: </strong>
                <p>_</p>
              </div>
              <div className="flex flex-row w-[200px] h-8 items-center gap-4">
                <strong className="text-xs">{item["nomefantasia"]}</strong>
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
        )
      )}
    </MapContainer>
  );
}
