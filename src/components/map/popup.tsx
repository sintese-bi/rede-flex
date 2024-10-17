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
  const MLT = new Intl.NumberFormat("de-DE").format(item["M/LT"]);
  const TMC = new Intl.NumberFormat("de-DE").format(item["TMC"]);
  const TMV = new Intl.NumberFormat("de-DE").format(item["TM VOL"]);
  const TMP = new Intl.NumberFormat("de-DE").format(item["TMP"]);
  const TMF = new Intl.NumberFormat("de-DE").format(item["TMF"]);

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
          <p className="text-main-color text-xs">R$ {MLT}</p>
        </div>
        <div>
          <p className="text-main-color text- font-extrabold">TMC</p>
          <p className="text-main-color text-xs">R$ {TMC}</p>
        </div>
        <div>
          <p className="text-main-color text- font-extrabold">TM VOL</p>
          <p className="text-main-color text-xs">{TMV} L</p>
        </div>
        <div>
          <p className="text-main-color text- font-extrabold">TMP</p>
          <p className="text-main-color text-xs">R$ {TMP}</p>
        </div>
        <div>
          <p className="text-main-color text- font-extrabold">TMF</p>
          <p className="text-main-color text-xs">R$ {TMF}</p>
        </div>
      </div>
    </Popup>
  );
}
