import { Popup } from "react-leaflet";

type MyObject = {
  lat: number;
  long: number;
  nomefantasia: string;
  ibm: string;
  endereco: string;
  "Venda de Combustível": number;
  "Produtos vendidos": number;
  Galonagem: number;
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
          <p className="text-main-color text- font-extrabold">IBM</p>
          <p className="text-main-color text-xs">{item["ibm"]}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 h-full justify-center items-center w-full gap-1">
        <div className="rounded-lg bg-main-color shadow-md px-2 py-1 h-24">
          <p className="text-xs text-slate-400 font-extrabold">
            Venda de Combustível
          </p>
          <p className="text-xs text-slate-200 font-extrabold">
            {item["Venda de Combustível"]}
          </p>
        </div>
        <div className="rounded-lg bg-main-color shadow-md px-2 h-24">
          <p className="text-xs text-slate-400 font-extrabold">
            Produtos vendidos
          </p>
          <p className="text-xs text-slate-200 font-extrabold">
            {item["Produtos vendidos"]}
          </p>
        </div>
        <div className="rounded-lg bg-main-color shadow-md px-2 h-24">
          <p className="text-xs text-slate-400 font-extrabold">Galonagem</p>
          <p className="text-xs text-slate-200 font-extrabold">
            {item["Galonagem"]}
          </p>
        </div>
      </div>
    </Popup>
  );
}
