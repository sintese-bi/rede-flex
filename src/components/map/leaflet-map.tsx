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
  console.log(data);
  var greenIcon = L.icon({
    iconUrl: "/icons/fuel.png",
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
              <div className="flex flex-col gap-4 h-full lg:px-8 md:px-8 sm:px-4 xs:px-4 px-4 rounded-lg bg-main-color justify-center shadow-md">
                <div className="flex flex-col gap-1">
                  <p className="lg:text-lg md:text-lg text-sm font-extrabold text-slate-400">
                    {""}
                  </p>
                  <div className="flex items-center gap-1">
                    <p className="lg:text-lg md:text-md sm:text-sm font-bold text-slate-200">
                      {""}
                    </p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <p className="text-xs font-bold text-slate-400">{""}</p>
                  <p className="text-xs font-bold text-slate-200">{""}</p>
                </div>
              </div>
            </Popup>
          </Marker>
        )
      )}
    </MapContainer>
  );
}
