import { IMyMap } from "./leaflet-map";

export default function MapPopup({ item }: { item: IMyMap }) {
  const MLT = new Intl.NumberFormat("de-DE").format(item["M/LT"]);
  const MLT_Definido = new Intl.NumberFormat("de-DE").format(
    item["M/LT_Definido"]
  );
  const TMC = new Intl.NumberFormat("de-DE").format(item["TMC"]);
  const TMC_Definido = new Intl.NumberFormat("de-DE").format(
    item["TMC_Definido"]
  );
  const TMV = new Intl.NumberFormat("de-DE").format(item["TM VOL"]);
  const TMV_Definido = new Intl.NumberFormat("de-DE").format(
    item["TM VOL_Definido"]
  );
  const TMP = new Intl.NumberFormat("de-DE").format(item["TMP"]);
  const TMP_Definido = new Intl.NumberFormat("de-DE").format(
    item["TMP_Definido"]
  );
  const TMF = new Intl.NumberFormat("de-DE").format(item["TMF"]);
  const TMF_Definido = new Intl.NumberFormat("de-DE").format(
    item["TMF_Definido"]
  );
  const LBO = new Intl.NumberFormat("de-DE").format(item["LBO"]);
  const LBO_Definido = new Intl.NumberFormat("de-DE").format(
    item["LBO_Definido"]
  );
  const LBOProduto = new Intl.NumberFormat("de-DE").format(item["LBOProduto"]);
  const LBO_Produto_Definido = new Intl.NumberFormat("de-DE").format(
    item["LBO_Produto_Definido"]
  );
  const LBOGalonagem = new Intl.NumberFormat("de-DE").format(
    item["LBOGalonagem"]
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
        <p className="text-main-color text- font-extrabold">
          M/LT x M/LT Definido
        </p>
        <p className="text-main-color text-xs">
          % {MLT} - % {MLT_Definido}
        </p>
      </div>
      <div>
        <p className="text-main-color text- font-extrabold">
          TMC x TMC Definido
        </p>
        <p className="text-main-color text-xs">
          % {TMC} - % {TMC_Definido}
        </p>
      </div>
      <div>
        <p className="text-main-color text- font-extrabold">
          TM VOL x TM VOL Definido
        </p>
        <p className="text-main-color text-xs">
          % {TMV} - % {TMV_Definido}
        </p>
      </div>
      <div>
        <p className="text-main-color text- font-extrabold">
          TMP x TMP Definido
        </p>
        <p className="text-main-color text-xs">
          % {TMP} - % {TMP_Definido}
        </p>
      </div>
      <div>
        <p className="text-main-color text- font-extrabold">
          TMF x TMF Definido
        </p>
        <p className="text-main-color text-xs">
          % {TMF} - % {TMF_Definido}
        </p>
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
