import {Spratnost} from "./spratnost.enum";
import {Grejanje} from "./grejanje.enum";

export interface Stan {
  id: number;
  izdavanje: boolean;
  brojSoba: string;
  povrsina: number;
  cena: number;
  grad: string;
  adresa: string;
  broj: string;
  status: string;
  godinaIzgradnje: number;
  sprat: Spratnost
  grejanje: Grejanje;
  brojTerasa;
  parking: boolean;
  opis: string;
  fotografije: string[];
}
