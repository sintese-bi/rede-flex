import { Popup } from "react-leaflet";

type MyObject = {
  lat: number;
  long: number;
  nomefantasia: string;
  ibm: string;
  endereco: string;
  "Venda de Combustível": string;
  "Produtos vendidos": string;
  Galonagem: string;
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
          <p className="text-main-color text- font-extrabold">
            Venda de Combustível
          </p>
          <p className="text-main-color text-xs">
            {item["Venda de Combustível"]}
          </p>
        </div>
        <div>
          <p className="text-main-color text- font-extrabold">
            Produtos vendidos
          </p>
          <p className="text-main-color text-xs">{item["Produtos vendidos"]}</p>
        </div>
        <div>
          <p className="text-main-color text- font-extrabold">Galonagem</p>
          <p className="text-main-color text-xs">{item["Galonagem"]}</p>
        </div>
      </div>
    </Popup>
  );
}
