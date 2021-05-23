import {Spratnost} from "./spratnost.enum";
import {Grejanje} from "./grejanje.enum";

export interface Stan {
  id: string;
  izdavanje: boolean;
  brojSoba: string;
  povrsina: number;
  cena: number;
  grad: string;
  adresa: string;
  broj: string;
  status: string;
  godinaIzgradnje: number;
  sprat: Spratnost;
  grejanje: Grejanje;
  brojTerasa: number;
  parking: boolean;
  opis: string;
  fotografije: string[];
}
