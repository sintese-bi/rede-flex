import { Popup } from "react-leaflet";
type MyObject = {
  long: number;
  nomefantasia: string;
  ibm: string;
  endereco: string;
  "M/LT": number;
  TMC: number;
  "TM VOL": number;
  TMP: number;
  TMF: number;
  LBO: number;
  LBOProduto: number;
  LBOGalonagem: number;
  LBO_Definido: number;
  LBO_Produto_Definido: number;
  LBO_Galonagem_Definido: number;
  averageComparison: 0 | 1 | 2;
};
export default function MapPopup({ item }: { item: MyObject }) {
  const MLT = new Intl.NumberFormat("de-DE").format(item["M/LT"]);
  const TMC = new Intl.NumberFormat("de-DE").format(item["TMC"]);
  const TMV = new Intl.NumberFormat("de-DE").format(item["TM VOL"]);
  const TMP = new Intl.NumberFormat("de-DE").format(item["TMP"]);
  const TMF = new Intl.NumberFormat("de-DE").format(item["TMF"]);
  const LBO = new Intl.NumberFormat("de-DE").format(item["LBO"]);
  const LBOProduto = new Intl.NumberFormat("de-DE").format(item["LBOProduto"]);
  const LBOGalonagem = new Intl.NumberFormat("de-DE").format(
    item["LBOGalonagem"]
  );
  const LBO_Definido = new Intl.NumberFormat("de-DE").format(
    item["LBO_Definido"]
  );
  const LBO_Produto_Definido = new Intl.NumberFormat("de-DE").format(
    item["LBO_Produto_Definido"]
  );
  const LBO_Galonagem_Definido = new Intl.NumberFormat("de-DE").format(
    item["LBO_Galonagem_Definido"]
  );
  return (
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
      <div>
        <p className="text-main-color text- font-extrabold">
          LBO x LBO Definido
        </p>
        <p className="text-main-color text-xs">
          % {LBO} - % {LBO_Definido}
        </p>
      </div>
      <div>
        <p className="text-main-color text- font-extrabold">
          LBO Produto x LBO Produto definido
        </p>
        <p className="text-main-color text-xs">
          % {LBOProduto} - % {LBO_Produto_Definido}
        </p>
      </div>
      <div>
        <p className="text-main-color text- font-extrabold">
          LBO Galonagem x LBO Galonagem definido
        </p>
        <p className="text-main-color text-xs">
          % {LBOGalonagem} - % {LBO_Galonagem_Definido}
        </p>
      </div>
    </div>
  );
}
