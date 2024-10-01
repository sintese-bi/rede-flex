import { Popup } from "react-leaflet";

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
};
export default function MapPopup({ item }: { item: MyObject }) {
  return (
    <Popup>
      <div className="flex flex-col">
        <div>
          <p className="text-main-color text- font-extrabold">Nome fantasia</p>
          <p className="text-main-color text-xs">{item["nomefantasia"]}</p>
        </div>
        <div>
          <p className="text-main-color text- font-extrabold">Endereco</p>
          <p className="text-main-color text-xs">{item["endereco"]}</p>
        </div>
        <div>
          <p className="text-main-color text- font-extrabold">M/LT</p>
          <p className="text-main-color text-xs">{item["M/LT"]}</p>
        </div>
        <div>
          <p className="text-main-color text- font-extrabold">TMC</p>
          <p className="text-main-color text-xs">{item["TMC"]}</p>
        </div>
        <div>
          <p className="text-main-color text- font-extrabold">TM VOL</p>
          <p className="text-main-color text-xs">{item["TM VOL"]}</p>
        </div>
        <div>
          <p className="text-main-color text- font-extrabold">TMP</p>
          <p className="text-main-color text-xs">{item["TMP"]}</p>
        </div>
        <div>
          <p className="text-main-color text- font-extrabold">TMF</p>
          <p className="text-main-color text-xs">{item["TMF"]}</p>
        </div>
      </div>
    </Popup>
  );
}
