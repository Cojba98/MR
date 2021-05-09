import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class StanModule {
  id: number;
  brojSoba: string;
  povrsina: number;
  cena: number;
  grad: string;
  adresa: string;
  broj: string;
  status: string;
  godinaIzgradnje: number;
  sprat: string;
  grejanje: string;
  brojTerasa;
  parking: boolean;
  opis: string;
  fotografije: string[];
}
