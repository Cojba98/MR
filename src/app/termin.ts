import {Stan} from "./stan";
import {Time} from "@angular/common";
import {StatusTermina} from "./status-termina.enum";

export interface Termin {

  stan: Stan;
  datum: Date;
  status: StatusTermina

}
