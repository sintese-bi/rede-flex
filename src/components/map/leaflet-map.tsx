"use client";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import L from "leaflet";
import MapPopup from "./popup";
type MyObject = {
  lat: number;
  long: number;
  nomefantasia: string;
  ibm: string;
  endereco: string;
  "M/LT": number;
  TMC: number;
  "TM VOL": number;
  TMP: number;
  TMF: number;
  averageComparison: number;
};
export default function Leaflet({ data }: { data: MyObject[] }) {
  var greenIcon = L.icon({
    iconUrl: "/icons/green_fuel_icon.png",
    iconSize: [38, 35], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
  });
  var redIcon = L.icon({
    iconUrl: "/icons/red_fuel_icon.png",
    iconSize: [38, 35], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
  });
  var yellowIcon = L.icon({
    iconUrl: "/icons/yellow_fuel_icon.png",
    iconSize: [38, 35], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
  });
  return (
    <MapContainer
      center={[-19.912998, -43.940933]}
      zoom={13}
      scrollWheelZoom={false}
      className="h-full w-full rounded-lg z-10"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.map((item, index) => {
        const number = item["averageComparison"];
        const icon =
          number === 0 ? greenIcon : number === 1 ? yellowIcon : redIcon;
        return (
          <Marker
            position={[item["lat"], item["long"]]}
            icon={icon}
            key={index}
          >
            <MapPopup item={item} />
          </Marker>
        );
      })}
    </MapContainer>
  );
}
